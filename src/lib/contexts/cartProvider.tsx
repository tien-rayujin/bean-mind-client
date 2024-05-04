// learn to use contex

import React, { createContext, useContext, useMemo, useState } from "react";

type CourseLevel = "Easy" | "Medium" | "Hard";
type CourseStatus = "UnAvailable" | "Available";

type Course = {
  id: string;
  name: string;
  price: number;
};

type CartItem = {
  id: string;
  course: Course;
  courseLevel: CourseLevel;
  quantity: number;
};

// CourseLevel === CartItem["courseLevel"]

type CartType = {
  items: CartItem[];
  addItem: (course: CartItem["course"], level: CartItem["courseLevel"]) => void;
  updateItem: (course: CartItem["course"], amount: -1 | 1) => void;
  removeItem: (course: Course) => void;
  total: number;
};

// why they not specific the context type ?
const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateItem: () => {},
  removeItem: () => {},
  total: 0,
});

const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (course: Course, level: CourseLevel) => {
    const existed = items.find((x) => x.course === course);
    // product existed then increase the amount of product in cart
    if (existed) {
      updateItem(course, 1);
      return;
    }

    const newCartItem: CartItem = {
      id: "", // the backend with keep in mind of generate the UUID instead of client side
      course,
      courseLevel: level,
      quantity: 1, // defualt quantity
    };
    setItems([...items, newCartItem]);
  };

  // instead of use quanity to updateItem, use the constraint value to update specific item in cart
  const updateItem = (course: Course, amount: -1 | 1) => {
    setItems(
      items
        .map((item) => {
          if (item.course.id === course.id) {
            return {
              ...item,
              quantity: item.quantity + amount,
            };
          }
          return item;
        })
        // they use filter alot, to filter stuff -> increase UX
        .filter((x) => x.quantity > 0),
    );
  };

  // redundant ?
  // can I use only an updateItem to handle this ?
  const removeItem = (course: Course | Course[]) => {};

  const total = items.reduce(
    (origin, item) => (origin += item.course.price * item.quantity),
    0,
  );
  return (
    // use it as top level - authentication related
    <CartContext.Provider
      value={{ items, addItem, updateItem, removeItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

// exprot the useContext out instead of useContext later on
export const useCart = () => {
  return useContext(CartContext);
};
