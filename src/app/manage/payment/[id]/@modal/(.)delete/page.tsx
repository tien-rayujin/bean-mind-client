import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPaymentRequestHandler } from "@/lib/services/payment/Handlers";
import { notFound } from "next/navigation";
import { DeletePaymentConfirm } from "@/app/manage/payment/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const payment = (await GetPaymentRequestHandler(id)).data;

  if (!payment) return notFound();

  return (
    <DefaultModal title="Delete Payment">
      <div className="w-180">
        <DeletePaymentConfirm payment={payment} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
