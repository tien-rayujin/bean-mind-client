import React from "react";
import { CreateWorksheetTemplateForm } from "@/app/manage/worksheetTemplate/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";
import { GetChaptersRequestHandler } from "@/lib/services/chapter/Handlers";
import { notFound } from "next/navigation";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetChaptersRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
    GetSubjectsRequestHandler({ pageSize: 20 }),
  ]);
  const chapters = payload[0].data?.items;
  const topics = payload[1].data?.items;
  const subjects = payload[2].data?.items;

  if (!chapters || !topics || !subjects) return notFound();

  return (
    <DefaultModal title="Create WorksheetTemplate">
      <div className="w-180">
        <CreateWorksheetTemplateForm
          payload={{
            chapter: chapters,
            topics: topics,
            subjects: subjects,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
