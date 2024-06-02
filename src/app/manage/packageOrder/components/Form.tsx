"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreatePackageOrderRequestHandler,
  UpdatePackageOrderRequestHandler,
} from "@/lib/services/packageOrder/Handlers";
import { GetPackageOrderResponseModel } from "@/lib/services/packageOrder/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreatePackageOrderFormProps
  extends FormWithPayload<{
    packages: Package[];
  }> {}

const createPackageOrderFormInit: BaseResponse<GetPackageOrderResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreatePackageOrderForm: React.FC<CreatePackageOrderFormProps> = (
  props,
) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreatePackageOrderRequestHandler,
    createPackageOrderFormInit,
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

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdatePackageOrderFormProps
  extends FormWithPayload<{
    packages: Package[];
  }> {
  packageorder: PackageOrder;
}

const updatePackageOrderFormInit: BaseResponse<GetPackageOrderResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdatePackageOrderForm: React.FC<UpdatePackageOrderFormProps> = (
  props,
) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdatePackageOrderRequestHandler,
    updatePackageOrderFormInit,
  );
  const packageorder = props.packageorder;
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
      <input type="hidden" name="id" value={packageorder.id} />
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
        defaultValue={packageorder.package.id}
      />
      {!formState.success && formState.fieldErrors?.packageId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.packageId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreatePackageOrderForm, UpdatePackageOrderForm };
