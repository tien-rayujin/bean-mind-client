"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateEnrollmentRequestHandler,
  UpdateEnrollmentRequestHandler,
} from "@/lib/services/enrollment/Handlers";
import { GetEnrollmentResponseModel } from "@/lib/services/enrollment/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateEnrollmentFormProps
  extends FormWithPayload<{
    packageOrders: PackageOrder[];
    lecturers: Lecturer[];
    students: Student[];
  }> {}

const createEnrollmentFormInit: BaseResponse<GetEnrollmentResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateEnrollmentForm: React.FC<CreateEnrollmentFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateEnrollmentRequestHandler,
    createEnrollmentFormInit,
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

      <StyFormSelect<Lecturer & { [key: string]: any }>
        name="lecturerId"
        placeholder="Please select lecturer"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.lecturers}
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.lecturerId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.lecturerId}
        </span>
      )}

      <StyFormSelect<Student & { [key: string]: any }>
        name="studentId"
        placeholder="Please select student"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.students}
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.studentId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.studentId}
        </span>
      )}

      <StyFormSelect<PackageOrder & { [key: string]: any }>
        name="packageOrderId"
        placeholder="Please select packageOrder"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.packageOrders}
      />
      {!formState.success && formState.fieldErrors?.packageOrderId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.packageOrderId}
        </span>
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateEnrollmentFormProps
  extends FormWithPayload<{
    packageOrders: PackageOrder[];
    lecturers: Lecturer[];
    students: Student[];
  }> {
  enrollment: Enrollment;
}

const updateEnrollmentFormInit: BaseResponse<GetEnrollmentResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateEnrollmentForm: React.FC<UpdateEnrollmentFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateEnrollmentRequestHandler,
    updateEnrollmentFormInit,
  );
  const enrollment = props.enrollment;
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
      <input type="hidden" name="id" value={enrollment.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormSelect<Lecturer & { [key: string]: any }>
        name="lecturerId"
        placeholder="Please select lecturer"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.lecturers}
        defaultValue={enrollment.lecturer.id}
      />
      {!formState.success && formState.fieldErrors?.lecturerId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.lecturerId}
        </span>
      )}

      <StyFormSelect<Student & { [key: string]: any }>
        name="studentId"
        placeholder="Please select student"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.students}
        defaultValue={enrollment.student.id}
      />
      {!formState.success && formState.fieldErrors?.studentId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.studentId}
        </span>
      )}

      <StyFormSelect<PackageOrder & { [key: string]: any }>
        name="packageOrderId"
        placeholder="Please select packageOrder"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.packageOrders}
        defaultValue={enrollment.packageOrder.id}
      />
      {!formState.success && formState.fieldErrors?.packageOrderId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.packageOrderId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateEnrollmentForm, UpdateEnrollmentForm };
