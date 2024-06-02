"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateGradeLevelRequestHandler,
  UpdateGradeLevelRequestHandler,
} from "@/lib/services/gradeLevel/Handlers";
import { GetGradeLevelResponseModel } from "@/lib/services/gradeLevel/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateGradeLevelFormProps extends FormWithPayload<null> {}

const createGradeLevelFormInit: BaseResponse<GetGradeLevelResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateGradeLevelForm: React.FC<CreateGradeLevelFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    CreateGradeLevelRequestHandler,
    createGradeLevelFormInit,
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
        placeholder="name"
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
interface UpdateGradeLevelFormProps extends FormWithPayload<null> {
  gradeLevel: GradeLevel;
}

const updateGradeLevelFormInit: BaseResponse<GetGradeLevelResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateGradeLevelForm: React.FC<UpdateGradeLevelFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    UpdateGradeLevelRequestHandler,
    updateGradeLevelFormInit,
  );
  const gradelevel = props.gradeLevel;
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
      <input type="hidden" name="id" value={gradelevel.id} />
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
        placeholder="name"
        required
        extras="tracking-wide"
        defaultValue={gradelevel.name}
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

export { CreateGradeLevelForm, UpdateGradeLevelForm };
