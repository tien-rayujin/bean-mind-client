"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateTeachingSlotRequestHandler,
  UpdateTeachingSlotRequestHandler,
} from "@/lib/services/teachingSlot/Handlers";
import { GetTeachingSlotResponseModel } from "@/lib/services/teachingSlot/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateTeachingSlotFormProps
  extends FormWithPayload<{
    slots: Slot[];
    gradeLevels: GradeLevel[];
    lecturers: Lecturer[];
  }> {}

const createTeachingSlotFormInit: BaseResponse<GetTeachingSlotResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateTeachingSlotForm: React.FC<CreateTeachingSlotFormProps> = (
  props,
) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateTeachingSlotRequestHandler,
    createTeachingSlotFormInit,
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
        type="date"
        name="date"
        placeholder="date"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.date && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.date}
        </span>
      )}

      <StyFormSelect<Slot & { [key: string]: any }>
        name="slotId"
        placeholder="Please select slot"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.slots}
      />
      {!formState.success && formState.fieldErrors?.slotId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.slotId}
        </span>
      )}

      <StyFormSelect<GradeLevel & { [key: string]: any }>
        name="gradeLevelId"
        placeholder="Please select gradeLevel"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.gradeLevels}
      />
      {!formState.success && formState.fieldErrors?.gradeLevelId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.gradeLevelId}
        </span>
      )}

      <StyFormSelect<Lecturer & { [key: string]: any }>
        name="lecturerId"
        placeholder="Please select lecturer"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.lecturers}
      />
      {!formState.success && formState.fieldErrors?.lecturerId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.lecturerId}
        </span>
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateTeachingSlotFormProps
  extends FormWithPayload<{
    slots: Slot[];
    gradeLevels: GradeLevel[];
    lecturers: Lecturer[];
  }> {
  teachingSlot: TeachingSlot;
}

const updateTeachingSlotFormInit: BaseResponse<GetTeachingSlotResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateTeachingSlotForm: React.FC<UpdateTeachingSlotFormProps> = (
  props,
) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateTeachingSlotRequestHandler,
    updateTeachingSlotFormInit,
  );
  const teachingSlot = props.teachingSlot;
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
      <input type="hidden" name="id" value={teachingSlot.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormInput
        type="date"
        name="date"
        placeholder="date"
        required
        extras="tracking-wide"
        defaultValue={teachingSlot.date.toString()}
      />
      {!formState.success && formState.fieldErrors?.date && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.date}
        </span>
      )}

      <StyFormSelect<Slot & { [key: string]: any }>
        name="slotId"
        placeholder="Please select slot"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.slots}
        defaultValue={teachingSlot.slot.id}
      />
      {!formState.success && formState.fieldErrors?.slotId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.slotId}
        </span>
      )}

      <StyFormSelect<GradeLevel & { [key: string]: any }>
        name="gradeLevelId"
        placeholder="Please select gradeLevel"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.gradeLevels}
      />
      {!formState.success && formState.fieldErrors?.gradeLevelId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.gradeLevelId}
        </span>
      )}

      <StyFormSelect<Lecturer & { [key: string]: any }>
        name="lecturerId"
        placeholder="Please select lecturer"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.lecturers}
      />
      {!formState.success && formState.fieldErrors?.lecturerId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.lecturerId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateTeachingSlotForm, UpdateTeachingSlotForm };
