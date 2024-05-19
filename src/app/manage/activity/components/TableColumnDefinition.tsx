"use client";

import { StyButton } from "@/components/Button";
import { Chip } from "@/components/Chips";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";

const columnHelper = createColumnHelper<Activity>();

const columns = [
  columnHelper.accessor("activityTypeId", {
    header: "TypeId",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("topicId", {
    header: "TopicId",
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
        <Link href={`/manage/activity/${info.row.original.id}`}>
          <StyButton extras="hover:!translate-y-0">View</StyButton>
        </Link>
      </div>
    ),
  }),
];

export { columns };
