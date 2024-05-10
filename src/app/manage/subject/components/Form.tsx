"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateSubjectRequestHandler,
  UpdateSubjectRequestHandler,
} from "@/lib/services/subject/Handlers";
import { GetSubjectResponseModel } from "@/lib/services/subject/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateSubjectFormProps extends FormWithPayload<null> {}

const createSubjectFormInit: BaseResponse<GetSubjectResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateSubjectForm: React.FC<CreateSubjectFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    CreateSubjectRequestHandler,
    createSubjectFormInit,
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

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateSubjectFormProps extends FormWithPayload<null> {
  subject: Subject;
}

const updateSubjectFormInit: BaseResponse<GetSubjectResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateSubjectForm: React.FC<UpdateSubjectFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    UpdateSubjectRequestHandler,
    updateSubjectFormInit,
  );
  const subject = props.subject;
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
      <input type="hidden" name="id" value={subject.id} />
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
        defaultValue={subject.title}
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
        defaultValue={subject.description}
      />
      {!formState.success && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateSubjectForm, UpdateSubjectForm };
