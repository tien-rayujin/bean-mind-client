import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetWorksheetTemplateRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { UpdateWorksheetTemplateForm } from "@/app/manage/worksheetTemplate/components/Form";
import { notFound } from "next/navigation";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";
import { GetChaptersRequestHandler } from "@/lib/services/chapter/Handlers";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const worksheetTemplate = (await GetWorksheetTemplateRequestHandler(id)).data;

  const payload = await Promise.all([
    GetChaptersRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
    GetSubjectsRequestHandler({ pageSize: 20 }),
  ]);
  const chapters = payload[0].data?.items;
  const topics = payload[1].data?.items;
  const subjects = payload[2].data?.items;

  if (!worksheetTemplate || !chapters || !topics || !subjects)
    return notFound();

  return (
    <DefaultModal title="Update WorksheetTemplate">
      <div className="w-180">
        <UpdateWorksheetTemplateForm
          worksheetTemplate={worksheetTemplate}
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

export default UpdateInterceptRoute;
