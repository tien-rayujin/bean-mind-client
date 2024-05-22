"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateActivityRequestHandler,
  UpdateActivityRequestHandler,
} from "@/lib/services/activity/Handlers";
import { GetActivityResponseModel } from "@/lib/services/activity/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateActivityFormProps
  extends FormWithPayload<{
    topics: Topic[];
    activityType: ActivityType[];
  }> {}

const createActivityFormInit: BaseResponse<GetActivityResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateActivityForm: React.FC<CreateActivityFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateActivityRequestHandler,
    createActivityFormInit,
  );
  const router = useRouter();

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

      <StyFormSelect<ActivityType & { [key: string]: any }>
        name="activityTypeId"
        placeholder="Please select activityType"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.activityType}
      />
      {!formState.success && formState.fieldErrors?.activityTypeId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.activityTypeId}
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

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateActivityFormProps
  extends FormWithPayload<{
    topics: Topic[];
    activityType: ActivityType[];
  }> {
  activity: Activity;
}

const updateActivityFormInit: BaseResponse<GetActivityResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateActivityForm: React.FC<UpdateActivityFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateActivityRequestHandler,
    updateActivityFormInit,
  );
  const activity = props.activity;
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
      <input type="hidden" name="id" value={activity.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormSelect<ActivityType & { [key: string]: any }>
        name="activityTypeId"
        placeholder="Please select activityType"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.activityType}
      />
      {!formState.success && formState.fieldErrors?.activityTypeId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.activityTypeId}
        </span>
      )}

      <StyFormSelect<Topic & { [key: string]: any }>
        name="topicId"
        placeholder="Please select topic"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.topics}
        defaultValue={activity.topic.id}
      />
      {!formState.success && formState.fieldErrors?.topicId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.topicId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateActivityForm, UpdateActivityForm };
