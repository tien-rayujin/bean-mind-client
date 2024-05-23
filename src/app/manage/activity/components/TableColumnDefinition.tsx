"use client";

import { StyButton } from "@/components/Button";
import { Chip } from "@/components/Chips";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import {
  RestoreButton,
  DeleteButton,
  UpdateButton,
  ViewDetailButton,
} from "@/components/Form/Button";

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
          <ViewDetailButton />
        </Link>
        <Link href={`/manage/activity/${info.row.original.id}/update`}>
          <UpdateButton />
        </Link>
        {info.row.original.isDeleted ? (
          <Link href={`/manage/activity/${info.row.original.id}/restore`}>
            <RestoreButton />
          </Link>
        ) : (
          <Link href={`/manage/activity/${info.row.original.id}/delete`}>
            <DeleteButton />
          </Link>
        )}
      </div>
    ),
  }),
];

export { columns };
