"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import { CreateWorksheetRequestModel } from "@/lib/services/worksheet/Models";
import {
  CreateWorksheetTemplateRequestHandler,
  UpdateWorksheetTemplateRequestHandler,
} from "@/lib/services/worksheetTemplate/Handlers";
import { GetWorksheetTemplateResponseModel } from "@/lib/services/worksheetTemplate/Models";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateWorksheetTemplateFormProps
  extends FormWithPayload<{
    topics: Topic[];
    chapter: Chapter[];
    subjects: Subject[];
  }> {}

const createWorksheetTemplateFormInit: BaseResponse<GetWorksheetTemplateResponseModel> =
  {
    success: false,
    message: "",
    data: undefined,
    errors: [],
    fieldErrors: {},
  };

const CreateWorksheetTemplateForm: React.FC<
  CreateWorksheetTemplateFormProps
> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateWorksheetTemplateRequestHandler,
    createWorksheetTemplateFormInit,
  );
  const router = useRouter();

  useEffect(() => {
    console.log({ formState });
    if (formState.message != "") {
      Toast({
        message: formState.message,
        type: formState.success ? "success" : "error",
      });
      if (formState.success) {
        router.refresh();
        router.back();
      }
    }
  }, [formState, router]);

  return (
    <form action={formAction} className="">
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormInput
        type="number"
        name="easyQuestionCount"
        required
        min={0}
        extras="tracking-wide"
        defaultValue={0}
      />
      {!formState.success && formState.fieldErrors?.easyQuestionCount && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.easyQuestionCount}
        </span>
      )}

      <StyFormInput
        type="number"
        name="normalQuestionCount"
        required
        min={0}
        extras="tracking-wide"
        defaultValue={0}
      />
      {!formState.success && formState.fieldErrors?.normalQuestionCount && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.normalQuestionCount}
        </span>
      )}

      <StyFormInput
        type="number"
        name="hardQuestionCount"
        required
        min={0}
        extras="tracking-wide"
        defaultValue={0}
      />
      {!formState.success && formState.fieldErrors?.hardQuestionCount && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.hardQuestionCount}
        </span>
      )}

      <StyFormSelect<{ [key: string]: any }>
        name="suffle"
        placeholder="Please select suffle"
        required
        displayProp={"value"}
        valueProp={"key"}
        datas={[
          {
            key: true,
            value: "True",
          },
          {
            key: false,
            value: "False",
          },
        ]}
      />
      {!formState.success && formState.fieldErrors?.suffle && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.suffle}
        </span>
      )}

      <StyFormSelect<{ [key: string]: any }>
        name="classification"
        placeholder="Please select classification"
        required
        displayProp={"value"}
        valueProp={"key"}
        datas={[
          {
            key: "0",
            value: "Subject",
          },
          {
            key: "1",
            value: "Chapter",
          },
          {
            key: "2",
            value: "Topic",
          },
        ]}
      />
      {!formState.success && formState.fieldErrors?.classification && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.classification}
        </span>
      )}

      <StyFormSelect<Chapter & { [key: string]: any }>
        name="chapterId"
        placeholder="Please select chapter"
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.chapter}
      />
      {!formState.success && formState.fieldErrors?.chapterId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.chapterId}
        </span>
      )}

      <StyFormSelect<Topic & { [key: string]: any }>
        name="topicId"
        placeholder="Please select topic"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.topics}
      />
      {!formState.success && formState.fieldErrors?.topicId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.topicId}
        </span>
      )}

      <StyFormSelect<Subject & { [key: string]: any }>
        name="subjectId"
        placeholder="Please select subject"
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.subjects}
      />
      {!formState.success && formState.fieldErrors?.subjectId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.subjectId}
        </span>
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateWorksheetTemplateFormProps
  extends FormWithPayload<{
    topics: Topic[];
    chapter: Chapter[];
    subjects: Subject[];
  }> {
  worksheetTemplate: WorksheetTemplate;
}

const updateWorksheetTemplateFormInit: BaseResponse<GetWorksheetTemplateResponseModel> =
  {
    success: false,
    message: "",
    data: undefined,
    errors: [],
    fieldErrors: {},
  };

const UpdateWorksheetTemplateForm: React.FC<
  UpdateWorksheetTemplateFormProps
> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateWorksheetTemplateRequestHandler,
    updateWorksheetTemplateFormInit,
  );
  const worksheetTemplate = props.worksheetTemplate;
  const router = useRouter();

  useEffect(() => {
    if (formState.message != "") {
      Toast({
        message: formState.message,
        type: formState.success ? "success" : "error",
      });
    }
    if (formState.success) {
      router.refresh();
      router.back();
    }
  }, [formState, router]);

  return (
    <form action={formAction} className="">
      <input type="hidden" name="id" value={worksheetTemplate.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}
      <StyFormInput
        type="number"
        name="easyQuestionCount"
        required
        min={0}
        extras="tracking-wide"
        defaultValue={worksheetTemplate.easyQuestionCount}
      />
      {!formState.success && formState.fieldErrors?.easyQuestionCount && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.easyQuestionCount}
        </span>
      )}
      <StyFormInput
        type="number"
        name="normalQuestionCount"
        required
        min={0}
        extras="tracking-wide"
        defaultValue={worksheetTemplate.normalQuestionCount}
      />
      {!formState.success && formState.fieldErrors?.normalQuestionCount && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.normalQuestionCount}
        </span>
      )}
      <StyFormInput
        type="number"
        name="hardQuestionCount"
        required
        min={0}
        extras="tracking-wide"
        defaultValue={worksheetTemplate.hardQuestionCount}
      />
      {!formState.success && formState.fieldErrors?.hardQuestionCount && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.hardQuestionCount}
        </span>
      )}
      <StyFormSelect<{ [key: string]: any }>
        name="classification"
        placeholder="Please select classification"
        required
        displayProp={"value"}
        valueProp={"key"}
        defaultValue={worksheetTemplate.classification}
        datas={[
          {
            key: "0",
            value: "Subject",
          },
          {
            key: "1",
            value: "Chapter",
          },
          {
            key: "2",
            value: "Topic",
          },
        ]}
      />
      {!formState.success && formState.fieldErrors?.classification && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.classification}
        </span>
      )}

      <StyFormSelect<Chapter & { [key: string]: any }>
        name="chapterId"
        placeholder="Please select chapter"
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.chapter}
        defaultValue={worksheetTemplate.chapter.id}
      />
      {!formState.success && formState.fieldErrors?.chapterId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.chapterId}
        </span>
      )}
      <StyFormSelect<Topic & { [key: string]: any }>
        name="topicId"
        placeholder="Please select topic"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.topics}
        defaultValue={worksheetTemplate.topic.id}
      />
      {!formState.success && formState.fieldErrors?.topicId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.topicId}
        </span>
      )}
      <StyFormSelect<Subject & { [key: string]: any }>
        name="subjectId"
        placeholder="Please select subject"
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.subjects}
        defaultValue={worksheetTemplate.subject.id}
      />
      {!formState.success && formState.fieldErrors?.subjectId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.subjectId}
        </span>
      )}
      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateWorksheetTemplateForm, UpdateWorksheetTemplateForm };
