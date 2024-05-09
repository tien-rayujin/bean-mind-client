import React from "react";
import { DefaultModal } from "@/components/Modal";
import { UpdateChapterForm } from "@/app/manage/chapter/[id]/components/Form";
import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { notFound } from "next/navigation";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;
  const courses = await GetCoursesRequestHandler({ pageSize: 999 });

  if (!chapter) return notFound();

  return (
    <DefaultModal title="Update Chapter">
      <div className="w-180">
        <UpdateChapterForm chapter={chapter} payload={courses.data?.items} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
