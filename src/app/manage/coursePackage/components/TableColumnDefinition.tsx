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

const columnHelper = createColumnHelper<CoursePackage>();

const columns = [
  columnHelper.accessor("course.title", {
    header: "Course",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("package.name", {
    header: "Package",
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
        <Link href={`/manage/coursePackage/${info.row.original.id}`}>
          <ViewDetailButton />
        </Link>
        <Link href={`/manage/coursePackage/${info.row.original.id}/update`}>
          <UpdateButton isIconOnly />
        </Link>
        {info.row.original.isDeleted ? (
          <Link href={`/manage/coursePackage/${info.row.original.id}/restore`}>
            <RestoreButton isIconOnly />
          </Link>
        ) : (
          <Link href={`/manage/coursePackage/${info.row.original.id}/delete`}>
            <DeleteButton isIconOnly />
          </Link>
        )}
      </div>
    ),
  }),
];

export { columns };
