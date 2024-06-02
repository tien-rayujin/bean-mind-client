"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateSlotRequestHandler,
  UpdateSlotRequestHandler,
} from "@/lib/services/slot/Handlers";
import { GetSlotResponseModel } from "@/lib/services/slot/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateSlotFormProps extends FormWithPayload<null> {}

const createSlotFormInit: BaseResponse<GetSlotResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateSlotForm: React.FC<CreateSlotFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    CreateSlotRequestHandler,
    createSlotFormInit,
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
        placeholder="name"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.name && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.name}
        </span>
      )}

      <StyFormInput
        type="text"
        name="startTime"
        placeholder="startTime"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.startTime && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.startTime}
        </span>
      )}

      <StyFormInput
        type="text"
        name="endTime"
        placeholder="endTime"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.endTime && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.endTime}
        </span>
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateSlotFormProps extends FormWithPayload<null> {
  slot: Slot;
}

const updateSlotFormInit: BaseResponse<GetSlotResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateSlotForm: React.FC<UpdateSlotFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    UpdateSlotRequestHandler,
    updateSlotFormInit,
  );
  const slot = props.slot;
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
      <input type="hidden" name="id" value={slot.id} />
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
        placeholder="name"
        required
        extras="tracking-wide"
        defaultValue={slot.name}
      />
      {!formState.success && formState.fieldErrors?.name && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.name}
        </span>
      )}

      <StyFormInput
        type="text"
        name="startTime"
        placeholder="startTime"
        required
        extras="tracking-wide"
        defaultValue={slot.startTime}
      />
      {!formState.success && formState.fieldErrors?.startTime && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.startTime}
        </span>
      )}

      <StyFormInput
        type="text"
        name="endTime"
        placeholder="endTime"
        required
        extras="tracking-wide"
        defaultValue={slot.endTime}
      />
      {!formState.success && formState.fieldErrors?.endTime && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.endTime}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateSlotForm, UpdateSlotForm };
