"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreatePaymentRequestHandler,
  UpdatePaymentRequestHandler,
} from "@/lib/services/payment/Handlers";
import { GetPaymentResponseModel } from "@/lib/services/payment/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreatePaymentFormProps
  extends FormWithPayload<{
    packageOrders: PackageOrder[];
  }> {}

const createPaymentFormInit: BaseResponse<GetPaymentResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreatePaymentForm: React.FC<CreatePaymentFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreatePaymentRequestHandler,
    createPaymentFormInit,
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
        type="number"
        name="amount"
        placeholder="amount"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.amount && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.amount}
        </span>
      )}

      <StyFormInput
        type="date"
        name="paymentDate"
        placeholder="paymentDate"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.paymentDate && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.paymentDate}
        </span>
      )}

      <StyFormSelect<{ [key: string]: any }>
        name="paymentStatus"
        placeholder="Please select paymentStatus"
        required
        displayProp={"value"}
        valueProp={"key"}
        datas={[
          {
            key: "1",
            value: "Pending",
          },
          {
            key: "2",
            value: "Complete",
          },
          {
            key: "3",
            value: "Canceled",
          },
        ]}
      />
      {!formState.success && formState.fieldErrors?.paymentStatus && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.paymentStatus}
        </span>
      )}

      <StyFormSelect<PackageOrder & { [key: string]: any }>
        name="packageOrderId"
        placeholder="Please select packageOrder"
        required
        displayProp={"code"}
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
interface UpdatePaymentFormProps
  extends FormWithPayload<{
    packageOrders: PackageOrder[];
  }> {
  payment: Payment;
}

const updatePaymentFormInit: BaseResponse<GetPaymentResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdatePaymentForm: React.FC<UpdatePaymentFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdatePaymentRequestHandler,
    updatePaymentFormInit,
  );
  const payment = props.payment;
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
      <input type="hidden" name="id" value={payment.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormInput
        type="text"
        name="amount"
        placeholder="amount"
        required
        extras="tracking-wide"
        defaultValue={payment.amount}
      />
      {!formState.success && formState.fieldErrors?.amount && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.amount}
        </span>
      )}

      <StyFormInput
        type="date"
        name="paymentDate"
        placeholder="paymentDate"
        required
        extras="tracking-wide"
        defaultValue={payment.paymentDate.toString()}
      />
      {!formState.success && formState.fieldErrors?.paymentDate && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.paymentDate}
        </span>
      )}

      <StyFormSelect<{ [key: string]: any }>
        name="paymentStatus"
        placeholder="Please select paymentStatus"
        required
        displayProp={"value"}
        valueProp={"key"}
        defaultValue={payment.paymentStatus}
        datas={[
          {
            key: "1",
            value: "Pending",
          },
          {
            key: "2",
            value: "Complete",
          },
          {
            key: "3",
            value: "Canceled",
          },
        ]}
      />
      {!formState.success && formState.fieldErrors?.paymentStatus && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.paymentStatus}
        </span>
      )}

      <StyFormSelect<PackageOrder & { [key: string]: any }>
        name="packageOrderId"
        placeholder="Please select packageOrder"
        required
        displayProp={"code"}
        valueProp={"id"}
        datas={payload?.packageOrders}
        defaultValue={payment.packageOrder.id}
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

export { CreatePaymentForm, UpdatePaymentForm };
