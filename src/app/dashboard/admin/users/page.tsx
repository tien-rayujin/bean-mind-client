import Image from "next/image";
import TableTeacher from "./table/teacher";
import TableStudent from "./table/student";
import TableThree from "@/components/Table";

const Users: React.FC = () => {
  const columns =["Ảnh", "Tên" ,"Email"]
  return (
    <div className="col-span-12 xl:col-span-7 m-10 ">
      <div className="rounded-sm border border-stone-800 text-whiter bg-slate-700 
      px-5 pb-2.5 pt-6 shadow-default
       dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 m-2">
        <TableTeacher />
      </div>
      <div className="rounded-sm border  border-stone-800 bg-slate-700
       px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark text-whiter dark:bg-boxdark
        sm:px-7.5 xl:pb-1 m-2">
        <TableStudent />
      </div>
      {/* <TableThree columns={columns} objData={undefined}/> */}
    </div>
  );
};

export default Users;
