"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreatePackageRequestHandler,
  UpdatePackageRequestHandler,
} from "@/lib/services/package/Handlers";
import { GetPackageResponseModel } from "@/lib/services/package/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreatePackageFormProps
  extends FormWithPayload<{
    gradeLevels: GradeLevel[];
  }> {}

const createPackageFormInit: BaseResponse<GetPackageResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreatePackageForm: React.FC<CreatePackageFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreatePackageRequestHandler,
    createPackageFormInit,
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

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdatePackageFormProps
  extends FormWithPayload<{
    gradeLevels: GradeLevel[];
  }> {
  package: Package;
}

const updatePackageFormInit: BaseResponse<GetPackageResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdatePackageForm: React.FC<UpdatePackageFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdatePackageRequestHandler,
    updatePackageFormInit,
  );
  const _package = props.package;
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
      <input type="hidden" name="id" value={_package.id} />
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
        defaultValue={_package.name}
      />
      {!formState.success && formState.fieldErrors?.name && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.name}
        </span>
      )}

      <StyFormSelect<GradeLevel & { [key: string]: any }>
        name="gradeLevelId"
        placeholder="Please select gradeLevel"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.gradeLevels}
        defaultValue={_package.gradeLevel.id}
      />
      {!formState.success && formState.fieldErrors?.gradeLevelId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.gradeLevelId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreatePackageForm, UpdatePackageForm };
