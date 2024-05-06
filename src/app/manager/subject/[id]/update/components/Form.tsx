"use client";

import { SubmitButton } from "@/components/Form/Button";
import StyFormInput from "@/components/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { UpdateSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { GetSubjectResponseModel } from "@/lib/services/subject/Models";
import { useEffect } from "react";
import { useFormState } from "react-dom";

interface UpdateSubjectFormProps {
  subject: Subject;
}

const updateSubjectFormInit: BaseResponse<GetSubjectResponseModel> = {
  isSuccess: false,
  message: "",
  result: undefined,
  errorMessages: [],
  fieldErrors: {},
};

const UpdateSubjectForm: React.FC<UpdateSubjectFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    UpdateSubjectRequestHandler,
    updateSubjectFormInit,
  );
  const subject = props.subject;

  useEffect(() => {
    if (formState.message != "") {
      Toast({
        message: formState.message,
        type: formState.isSuccess ? "success" : "error",
      });
      if (formState.isSuccess) {
        // router.push("/");
      }
    }
  }, [formState]);

  return (
    <form action={formAction} className="">
      <input type="hidden" name="id" value={subject.id} />

      <StyFormInput
        type="title"
        name="title"
        placeholder="Title"
        required
        extras="tracking-wide"
        defaultValue={subject.title}
      />
      {!formState.isSuccess && formState.fieldErrors?.title && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.title}
        </span>
      )}

      <StyFormInput
        type="description"
        name="description"
        placeholder="Description"
        required
        extras="tracking-wide"
        defaultValue={subject.description}
      />
      {!formState.isSuccess && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { UpdateSubjectForm };
