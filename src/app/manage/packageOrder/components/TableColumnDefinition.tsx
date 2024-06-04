"use client";

import { Chip } from "@/components/Chips";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import {
  RestoreButton,
  DeleteButton,
  UpdateButton,
  ViewDetailButton,
} from "@/components/Form/Button";

const columnHelper = createColumnHelper<PackageOrder>();

const columns = [
  columnHelper.accessor("package.name", {
    header: "Package",
    cell: (info) => info.getValue(),
  }),
  // columnHelper.accessor("students", {
  //   header: "Students",
  //   cell: (info) =>
  //     info.getValue() &&
  //     [...info.getValue()].map((x) => (
  //       <div key={x.id}>
  //         <h3>{x.appUser.userName}</h3>
  //         <h2>{x.appUser.email}</h2>
  //       </div>
  //     )),
  // }),
  columnHelper.accessor("isDeleted", {
    header: "Status",
    cell: (info) =>
      info.getValue() ? (
        <Chip title="Disable" type="danger" />
      ) : (
        <Chip title="Enable" type="success" />
      ),
  }),
  columnHelper.display({
    header: "Actions",
    cell: (info) => (
      <div className="flex items-center gap-x-3.5">
        <Link href={`/manage/packageOrder/${info.row.original.id}`}>
          <ViewDetailButton />
        </Link>
        <Link href={`/manage/packageOrder/${info.row.original.id}/update`}>
          <UpdateButton isIconOnly />
        </Link>
        {info.row.original.isDeleted ? (
          <Link href={`/manage/packageOrder/${info.row.original.id}/restore`}>
            <RestoreButton isIconOnly />
          </Link>
        ) : (
          <Link href={`/manage/packageOrder/${info.row.original.id}/delete`}>
            <DeleteButton isIconOnly />
          </Link>
        )}
      </div>
    ),
  }),
];

export { columns };
