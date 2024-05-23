import React from "react";
import { DataTeacher } from "./dataUser";
export default function TableTeacher() {

  return (
    <div>
      <div className="mb-6 flex justify-between">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Quản lý giáo viên
          </h4>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-slate-700 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Ảnh đại diện
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Họ tên
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              email
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              phone
            </h5>
          </div>
        </div>

        {DataTeacher.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 ${
              key === DataTeacher.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="h-9 w-full max-w-9 flex-shrink-0">
                <img src={brand.avatar} alt="Teacher Avatar" />
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="font-medium text-meta-3 ">
                {brand.fullName}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="font-medium text-meta-3">{brand.email}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="font-medium text-meta-5">{brand.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
