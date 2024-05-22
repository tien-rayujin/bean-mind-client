"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateQuestionLevelRequestHandler,
  UpdateQuestionLevelRequestHandler,
} from "@/lib/services/questionLevel/Handlers";
import { GetQuestionLevelResponseModel } from "@/lib/services/questionLevel/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateQuestionLevelFormProps extends FormWithPayload<null> {}

const createQuestionLevelFormInit: BaseResponse<GetQuestionLevelResponseModel> =
  {
    success: false,
    message: "",
    data: undefined,
    errors: [],
    fieldErrors: {},
  };

const CreateQuestionLevelForm: React.FC<CreateQuestionLevelFormProps> = (
  props,
) => {
  const [formState, formAction] = useFormState(
    CreateQuestionLevelRequestHandler,
    createQuestionLevelFormInit,
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
interface UpdateQuestionLevelFormProps extends FormWithPayload<null> {
  questionLevel: QuestionLevel;
}

const updateQuestionLevelFormInit: BaseResponse<GetQuestionLevelResponseModel> =
  {
    success: false,
    message: "",
    data: undefined,
    errors: [],
    fieldErrors: {},
  };

const UpdateQuestionLevelForm: React.FC<UpdateQuestionLevelFormProps> = (
  props,
) => {
  const [formState, formAction] = useFormState(
    UpdateQuestionLevelRequestHandler,
    updateQuestionLevelFormInit,
  );
  const questionLevel = props.questionLevel;
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
      <input type="hidden" name="id" value={questionLevel.id} />
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
        defaultValue={questionLevel.name}
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

export { CreateQuestionLevelForm, UpdateQuestionLevelForm };
