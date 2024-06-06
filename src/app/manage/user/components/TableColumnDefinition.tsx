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

const columnHelper = createColumnHelper<AppUser>();

const columns = [
  columnHelper.accessor("userName", {
    header: "User Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("phoneNumber", {
    header: "Phone",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("roleNames", {
    header: "Roles",
    cell: (info) => {
      const roleNames: Array<string> = info.getValue();
      return (
        <div className="flex items-center gap-x-2.5">
          {roleNames &&
            roleNames.map((role) => <Chip key={role} title={role} />)}
        </div>
      );
    },
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
        <Link href={`/manage/user/${info.row.original.id}`}>
          <ViewDetailButton />
        </Link>
        <Link href={`/manage/user/${info.row.original.id}/update`}>
          <UpdateButton isIconOnly />
        </Link>
        {info.row.original.isDeleted ? (
          <Link href={`/manage/user/${info.row.original.id}/restore`}>
            <RestoreButton isIconOnly />
          </Link>
        ) : (
          <Link href={`/manage/user/${info.row.original.id}/delete`}>
            <DeleteButton isIconOnly />
          </Link>
        )}
      </div>
    ),
  }),
];

export { columns };
