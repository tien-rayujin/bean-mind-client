"use client";

import { SubmitButton } from "@/components/Form/Button";
import StyFormInput from "@/components/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { CreateSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { GetSubjectResponseModel } from "@/lib/services/subject/Models";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

interface PageWithPayload<T> {
  payload: T;
}

interface CreateSubjectFormProps extends PageWithPayload<null> {}

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
        revalidatePath("/manager");
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
        type="title"
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
        type="description"
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

export { CreateSubjectForm };
