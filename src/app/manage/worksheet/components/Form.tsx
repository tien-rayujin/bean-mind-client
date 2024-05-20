"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateWorksheetRequestHandler,
  UpdateWorksheetRequestHandler,
} from "@/lib/services/worksheet/Handlers";
import { GetWorksheetResponseModel } from "@/lib/services/worksheet/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateWorksheetFormProps
  extends FormWithPayload<{
    activities: Activity[];
    worksheetTemplates: WorksheetTemplate[];
  }> {}

const createWorksheetFormInit: BaseResponse<GetWorksheetResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateWorksheetForm: React.FC<CreateWorksheetFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateWorksheetRequestHandler,
    createWorksheetFormInit,
  );
  const router = useRouter();

  // const defaultActivity = payload?.activities.find(
  //   (a) => a.activityType.name.toLowerCase() === "worksheet",
  // );

  // console.log({ defaultActivity });

  useEffect(() => {
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
        type="text"
        name="title"
        placeholder="Title"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.title && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.title}
        </span>
      )}

      <StyFormInput
        type="text"
        name="description"
        placeholder="Description"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      <StyFormSelect<WorksheetTemplate & { [key: string]: any }>
        name="worksheetTemplateId"
        placeholder="Please select worksheetTemplate"
        required
        displayProp={"classification"}
        valueProp={"id"}
        datas={payload?.worksheetTemplates}
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.worksheetTemplateId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.worksheetTemplateId}
        </span>
      )}

      <StyFormSelect<Activity & { [key: string]: any }>
        name="activityId"
        placeholder="Please select activity"
        required
        displayProp={"activityTypeId"}
        valueProp={"id"}
        datas={payload?.activities}
        // defaultValue={defaultActivity?.id}
      />
      {!formState.success && formState.fieldErrors?.activityId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.activityId}
        </span>
      )}
      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateWorksheetFormProps
  extends FormWithPayload<{
    activities: Activity[];
    worksheetTemplates: WorksheetTemplate[];
  }> {
  worksheet: Worksheet;
}

const updateWorksheetFormInit: BaseResponse<GetWorksheetResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateWorksheetForm: React.FC<UpdateWorksheetFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateWorksheetRequestHandler,
    updateWorksheetFormInit,
  );
  const worksheet = props.worksheet;
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
      <input type="hidden" name="id" value={worksheet.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormInput
        type="text"
        name="title"
        placeholder="Title"
        required
        extras="tracking-wide"
        defaultValue={worksheet.title}
      />
      {!formState.success && formState.fieldErrors?.title && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.title}
        </span>
      )}

      <StyFormInput
        type="text"
        name="description"
        placeholder="Description"
        required
        extras="tracking-wide"
        defaultValue={worksheet.description}
      />
      {!formState.success && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      <StyFormSelect<WorksheetTemplate & { [key: string]: any }>
        name="worksheetTemplateId"
        placeholder="Please select worksheetTemplate"
        required
        displayProp={"classification"}
        valueProp={"id"}
        datas={payload?.worksheetTemplates}
        defaultValue={worksheet.worksheetTemplate?.id}
      />
      {!formState.success && formState.fieldErrors?.worksheetTemplateId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.worksheetTemplateId}
        </span>
      )}

      <StyFormSelect<Activity & { [key: string]: any }>
        name="activityId"
        placeholder="Please select activity"
        required
        displayProp={"activityTypeId"}
        valueProp={"id"}
        datas={payload?.activities}
        defaultValue={worksheet.activity.id}
      />
      {!formState.success && formState.fieldErrors?.activityId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.activityId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateWorksheetForm, UpdateWorksheetForm };
