"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateQuestionTypeRequestHandler,
  UpdateQuestionTypeRequestHandler,
} from "@/lib/services/questionType/Handlers";
import { GetQuestionTypeResponseModel } from "@/lib/services/questionType/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateQuestionTypeFormProps extends FormWithPayload<null> {}

const createQuestionTypeFormInit: BaseResponse<GetQuestionTypeResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateQuestionTypeForm: React.FC<CreateQuestionTypeFormProps> = (
  props,
) => {
  const [formState, formAction] = useFormState(
    CreateQuestionTypeRequestHandler,
    createQuestionTypeFormInit,
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
interface UpdateQuestionTypeFormProps extends FormWithPayload<null> {
  questionType: QuestionType;
}

const updateQuestionTypeFormInit: BaseResponse<GetQuestionTypeResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateQuestionTypeForm: React.FC<UpdateQuestionTypeFormProps> = (
  props,
) => {
  const [formState, formAction] = useFormState(
    UpdateQuestionTypeRequestHandler,
    updateQuestionTypeFormInit,
  );
  const questionType = props.questionType;
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
      <input type="hidden" name="id" value={questionType.id} />
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
        defaultValue={questionType.name}
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

export { CreateQuestionTypeForm, UpdateQuestionTypeForm };
