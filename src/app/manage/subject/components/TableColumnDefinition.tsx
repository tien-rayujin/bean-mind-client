"use client";

import { StyButton } from "@/components/Button";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";

const columnHelper = createColumnHelper<Subject>();

const columns = [
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    header: "Actions",
    cell: (info) => (
      <div className="flex items-center gap-x-3.5">
        <Link href={`/manage/subject/${info.row.original.id}`}>
          <StyButton extras="hover:!translate-y-0">View</StyButton>
        </Link>
      </div>
    ),
  }),
];

export { columns };
