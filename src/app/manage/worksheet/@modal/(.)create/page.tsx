import React from "react";
import { CreateWorksheetForm } from "@/app/manage/worksheet/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetWorksheetTemplatesRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { notFound } from "next/navigation";
import { GetQuestionsRequestHandler } from "@/lib/services/question/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetWorksheetTemplatesRequestHandler({ pageSize: 20 }),
    GetQuestionsRequestHandler({ pageSize: 20 }),
  ]);
  const worksheetTemplates = payload[0].data?.items;
  const questions = payload[1].data?.items;

  if (!worksheetTemplates || !questions) return notFound();

  return (
    <DefaultModal title="Create Worksheet">
      <div className="w-180">
        <CreateWorksheetForm
          payload={{
            worksheetTemplates: worksheetTemplates,
            questions: questions,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
