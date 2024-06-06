"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateUserRequestHandler,
  UpdateUserRequestHandler,
} from "@/lib/services/user/Handlers";
import { GetUserResponseModel } from "@/lib/services/user/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateUserFormProps extends FormWithPayload<null> {}

const createUserFormInit: BaseResponse<GetUserResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateUserForm: React.FC<CreateUserFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    CreateUserRequestHandler,
    createUserFormInit,
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
        name="userName"
        placeholder="userName"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.userName && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.userName}
        </span>
      )}

      <StyFormInput
        type="email"
        name="email"
        placeholder="email"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.email && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.email}
        </span>
      )}

      <StyFormInput
        type="tel"
        name="phoneNumber"
        placeholder="phoneNumber"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.phoneNumber && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.phoneNumber}
        </span>
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateUserFormProps extends FormWithPayload<null> {
  user: AppUser;
}

const updateUserFormInit: BaseResponse<GetUserResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateUserForm: React.FC<UpdateUserFormProps> = (props) => {
  const [formState, formAction] = useFormState(
    UpdateUserRequestHandler,
    updateUserFormInit,
  );
  const user = props.user;
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
      <input type="hidden" name="id" value={user.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormInput
        type="text"
        name="userName"
        placeholder="userName"
        required
        extras="tracking-wide"
        defaultValue={user.userName}
      />
      {!formState.success && formState.fieldErrors?.userName && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.userName}
        </span>
      )}

      <StyFormInput
        type="email"
        name="email"
        placeholder="email"
        required
        extras="tracking-wide"
        defaultValue={user.email}
      />
      {!formState.success && formState.fieldErrors?.email && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.email}
        </span>
      )}

      <StyFormInput
        type="tel"
        name="phoneNumber"
        placeholder="phoneNumber"
        required
        extras="tracking-wide"
        defaultValue={user.phoneNumber}
      />
      {!formState.success && formState.fieldErrors?.phoneNumber && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.phoneNumber}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateUserForm, UpdateUserForm };
