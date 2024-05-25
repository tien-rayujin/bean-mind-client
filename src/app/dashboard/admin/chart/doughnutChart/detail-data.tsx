"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";
export default function DetailData() {
  return (
    <div className="flex flex-col justify-center items-start ml-15">
      <div className="title text-xl">
        Users:
      </div>

      <div className="description flex w-65 m-1  border-b">
        <div className="start flex space-x-1">
          <div className="icon mt-1.8 flex justify-center items-center">
            <FaCircle style={{ fontSize: "10px", color: "" }} />
          </div>
          <div className="content">Student</div>
        </div>
        <div className="rateEnd ml-auto ">50%</div>
      </div>
      <div className="description flex w-65 m-1 border-b">
        <div className="start flex space-x-1">
          <div className="icon mt-1.8 flex justify-center items-center">
            <FaCircle style={{ fontSize: "10px", color: "" }} />
          </div>
          <div className="content">Parents</div>
        </div>
        <div className="rateEnd ml-auto ">50%</div>
      </div>
      <div className="description flex w-65 m-1 border-b">
        <div className="start flex space-x-1">
          <div className="icon mt-1.8 flex justify-center items-center">
            <FaCircle style={{ fontSize: "10px", color: "" }} />
          </div>
          <div className="content">Teachers</div>
        </div>
        <div className="rateEnd ml-auto ">50%</div>
      </div>
    </div>
  );
}
