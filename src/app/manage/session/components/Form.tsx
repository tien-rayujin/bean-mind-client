"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateSessionRequestHandler,
  UpdateSessionRequestHandler,
} from "@/lib/services/session/Handlers";
import { GetSessionResponseModel } from "@/lib/services/session/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateSessionFormProps
  extends FormWithPayload<{
    teachingSlots: TeachingSlot[];
    enrollments: Enrollment[];
    lecturers: Lecturer[];
  }> {}

const createSessionFormInit: BaseResponse<GetSessionResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateSessionForm: React.FC<CreateSessionFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateSessionRequestHandler,
    createSessionFormInit,
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

      <StyFormSelect<Enrollment & { [key: string]: any }>
        name="enrollmentId"
        placeholder="Please select enrollment"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.enrollments}
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.enrollmentId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.enrollmentId}
        </span>
      )}

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

      <StyFormSelect<TeachingSlot & { [key: string]: any }>
        name="teachingSlotId"
        placeholder="Please select teachingSlot"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.teachingSlots}
      />
      {!formState.success && formState.fieldErrors?.teachingSlotId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.teachingSlotId}
        </span>
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateSessionFormProps
  extends FormWithPayload<{
    teachingSlots: TeachingSlot[];
    enrollments: Enrollment[];
    lecturers: Lecturer[];
  }> {
  session: Session;
}

const updateSessionFormInit: BaseResponse<GetSessionResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateSessionForm: React.FC<UpdateSessionFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateSessionRequestHandler,
    updateSessionFormInit,
  );
  const session = props.session;
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
      <input type="hidden" name="id" value={session.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormSelect<Enrollment & { [key: string]: any }>
        name="enrollmentId"
        placeholder="Please select enrollment"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.enrollments}
        defaultValue={session.enrollment.id}
      />
      {!formState.success && formState.fieldErrors?.enrollmentId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.enrollmentId}
        </span>
      )}

      <StyFormSelect<Lecturer & { [key: string]: any }>
        name="lecturerId"
        placeholder="Please select lecturer"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.lecturers}
        defaultValue={session.lecturer.id}
      />
      {!formState.success && formState.fieldErrors?.lecturerId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.lecturerId}
        </span>
      )}

      <StyFormSelect<TeachingSlot & { [key: string]: any }>
        name="teachingSlotId"
        placeholder="Please select teachingSlot"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.teachingSlots}
        defaultValue={session.teachingSlot.id}
      />
      {!formState.success && formState.fieldErrors?.teachingSlotId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.teachingSlotId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateSessionForm, UpdateSessionForm };
