"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateCoursePackageRequestHandler,
  UpdateCoursePackageRequestHandler,
} from "@/lib/services/coursePackage/Handlers";
import { GetCoursePackageResponseModel } from "@/lib/services/coursePackage/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateCoursePackageFormProps
  extends FormWithPayload<{
    packages: Package[];
    courses: Course[];
  }> {}

const createCoursePackageFormInit: BaseResponse<GetCoursePackageResponseModel> =
  {
    success: false,
    message: "",
    data: undefined,
    errors: [],
    fieldErrors: {},
  };

const CreateCoursePackageForm: React.FC<CreateCoursePackageFormProps> = (
  props,
) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateCoursePackageRequestHandler,
    createCoursePackageFormInit,
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

      <StyFormSelect<Package & { [key: string]: any }>
        name="packageId"
        placeholder="Please select package"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.packages}
      />
      {!formState.success && formState.fieldErrors?.packageId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.packageId}
        </span>
      )}

      <StyFormSelect<Course & { [key: string]: any }>
        name="courseId"
        placeholder="Please select course"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.courses}
      />
      {!formState.success && formState.fieldErrors?.courseId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.courseId}
        </span>
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateCoursePackageFormProps
  extends FormWithPayload<{
    packages: Package[];
    courses: Course[];
  }> {
  coursepackage: CoursePackage;
}

const updateCoursePackageFormInit: BaseResponse<GetCoursePackageResponseModel> =
  {
    success: false,
    message: "",
    data: undefined,
    errors: [],
    fieldErrors: {},
  };

const UpdateCoursePackageForm: React.FC<UpdateCoursePackageFormProps> = (
  props,
) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateCoursePackageRequestHandler,
    updateCoursePackageFormInit,
  );
  const coursepackage = props.coursepackage;
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
      <input type="hidden" name="id" value={coursepackage.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormSelect<Package & { [key: string]: any }>
        name="packageId"
        placeholder="Please select package"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.packages}
        defaultValue={coursepackage.package.id}
      />
      {!formState.success && formState.fieldErrors?.packageId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.packageId}
        </span>
      )}

      <StyFormSelect<Course & { [key: string]: any }>
        name="courseId"
        placeholder="Please select course"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.courses}
        defaultValue={coursepackage.course.id}
      />
      {!formState.success && formState.fieldErrors?.courseId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.courseId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateCoursePackageForm, UpdateCoursePackageForm };
