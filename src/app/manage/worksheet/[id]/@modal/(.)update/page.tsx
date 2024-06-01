import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { UpdateWorksheetForm } from "@/app/manage/worksheet/components/Form";
import { notFound } from "next/navigation";
import { GetWorksheetTemplatesRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { GetQuestionsRequestHandler } from "@/lib/services/question/Handlers";
import { GetWorksheetQuestionsRequestHandler } from "@/lib/services/worksheetQuestion/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const worksheet = (await GetWorksheetRequestHandler(id)).data;
  const payload = await Promise.all([
    GetWorksheetTemplatesRequestHandler({ pageSize: 20 }),
    GetQuestionsRequestHandler({ pageSize: 20 }),
    GetWorksheetQuestionsRequestHandler({ pageSize: 20, worksheetId: id }),
  ]);
  const worksheetTemplates = payload[0].data?.items;
  const questions = payload[1].data?.items;
  const worksheetQuestions = payload[2].data?.items;

  if (!worksheet || !worksheetTemplates || !questions || !worksheetQuestions)
    return notFound();

  return (
    <DefaultModal title="Update Worksheet">
      <div className="w-180">
        <UpdateWorksheetForm
          worksheet={worksheet}
          payload={{
            worksheetTemplates: worksheetTemplates,
            questions: questions,
            worksheetQuestions: worksheetQuestions,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
