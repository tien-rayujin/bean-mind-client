import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPaymentRequestHandler } from "@/lib/services/payment/Handlers";
import { notFound } from "next/navigation";
import { RestorePaymentConfirm } from "@/app/manage/payment/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const payment = (await GetPaymentRequestHandler(id)).data;

  if (!payment) return notFound();

  return (
    <DefaultModal title="Restore Payment">
      <div className="w-180">
        <RestorePaymentConfirm payment={payment} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
