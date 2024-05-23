"use client";

import { Chip } from "@/components/Chips";
import {
  DeleteButton,
  RestoreButton,
  UpdateButton,
  ViewDetailButton,
} from "@/components/Form/Button";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";

const columnHelper = createColumnHelper<Subject>();

const columns = [
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.getValue(),
  }),
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
        <Link href={`/manage/subject/${info.row.original.id}`}>
          <ViewDetailButton />
        </Link>
        <Link href={`/manage/subject/${info.row.original.id}/update`}>
          <UpdateButton isIconOnly />
        </Link>
        {info.row.original.isDeleted ? (
          <Link href={`/manage/subject/${info.row.original.id}/restore`}>
            <RestoreButton isIconOnly />
          </Link>
        ) : (
          <Link href={`/manage/subject/${info.row.original.id}/delete`}>
            <DeleteButton isIconOnly />
          </Link>
        )}
      </div>
    ),
  }),
];

export { columns };
