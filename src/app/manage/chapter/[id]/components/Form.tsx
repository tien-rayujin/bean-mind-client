"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import { UpdateChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { GetChapterResponseModel } from "@/lib/services/chapter/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

interface UpdateChapterFormProps extends FormWithPayload<Course[]> {
  chapter: Chapter;
}

const updateChapterFormInit: BaseResponse<GetChapterResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateChapterForm: React.FC<UpdateChapterFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateChapterRequestHandler,
    updateChapterFormInit,
  );
  const chapter = props.chapter;
  const router = useRouter();

  useEffect(() => {
    if (formState.message != "") {
      Toast({
        message: formState.message,
        type: formState.success ? "success" : "error",
      });
    }
    if (formState.success) {
      router.back();
    }
  }, [formState, router]);

  return (
    <form action={formAction} className="">
      <input type="hidden" name="id" value={chapter.id} />
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
        defaultValue={chapter.title}
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
        defaultValue={chapter.description}
      />
      {!formState.success && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      {/* {JSON.stringify(chapter.course)} */}
      <StyFormSelect<Course & { [key: string]: any }>
        name="courseid"
        placeholder="Please select course"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload}
        defaultValue={chapter.course.id}
      />
      {!formState.success && formState.fieldErrors?.courseid && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.courseId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { UpdateChapterForm };
