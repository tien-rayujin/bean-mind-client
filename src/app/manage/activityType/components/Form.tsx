"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateActivityTypeRequestHandler,
  UpdateActivityTypeRequestHandler,
} from "@/lib/services/activityType/Handlers";
import { GetActivityTypeResponseModel } from "@/lib/services/activityType/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateActivityTypeFormProps extends FormWithPayload<null> {}

const createActivityTypeFormInit: BaseResponse<GetActivityTypeResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateActivityTypeForm: React.FC<CreateActivityTypeFormProps> = (
  props,
) => {
  const [formState, formAction] = useFormState(
    CreateActivityTypeRequestHandler,
    createActivityTypeFormInit,
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

      <StyFormInput
        type="text"
        name="name"
        placeholder="Name"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.name && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.name}
        </span>
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateActivityTypeFormProps extends FormWithPayload<null> {
  activityType: ActivityType;
}

const updateActivityTypeFormInit: BaseResponse<GetActivityTypeResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateActivityTypeForm: React.FC<UpdateActivityTypeFormProps> = (
  props,
) => {
  const [formState, formAction] = useFormState(
    UpdateActivityTypeRequestHandler,
    updateActivityTypeFormInit,
  );
  const activityType = props.activityType;
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
      <input type="hidden" name="id" value={activityType.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormInput
        type="text"
        name="name"
        placeholder="Name"
        required
        extras="tracking-wide"
        defaultValue={activityType.name}
      />
      {!formState.success && formState.fieldErrors?.name && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.name}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateActivityTypeForm, UpdateActivityTypeForm };
