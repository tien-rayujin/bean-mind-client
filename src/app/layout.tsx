import type { Metadata } from "next";
import "@/css/poppin.css";
import "@/css/style.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppin",
});

export const metadata: Metadata = {
  title: "BeanMind",
  description: "BeanMind Interactive Learning",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div>{children}</div>
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
