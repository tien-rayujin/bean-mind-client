"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateCourseRequestHandler,
  UpdateCourseRequestHandler,
} from "@/lib/services/course/Handlers";
import { GetCourseResponseModel } from "@/lib/services/course/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateCourseFormProps extends FormWithPayload<Subject[]> {}

const createCourseFormInit: BaseResponse<GetCourseResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateCourseForm: React.FC<CreateCourseFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateCourseRequestHandler,
    createCourseFormInit,
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

      <StyFormSelect<Subject & { [key: string]: any }>
        name="subjectId"
        placeholder="Please select subject"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload}
      />
      {!formState.success && formState.fieldErrors?.subjectId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.subjectId}
        </span>
      )}
      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateCourseFormProps extends FormWithPayload<Subject[]> {
  course: Course;
}

const updateCourseFormInit: BaseResponse<GetCourseResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateCourseForm: React.FC<UpdateCourseFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateCourseRequestHandler,
    updateCourseFormInit,
  );
  const course = props.course;
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
      <input type="hidden" name="id" value={course.id} />
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
        defaultValue={course.title}
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
        defaultValue={course.description}
      />
      {!formState.success && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      <StyFormSelect<Subject & { [key: string]: any }>
        name="subjectId"
        placeholder="Please select subject"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload}
        defaultValue={course.subject.id}
      />
      {!formState.success && formState.fieldErrors?.subjectId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.subjectId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateCourseForm, UpdateCourseForm };
