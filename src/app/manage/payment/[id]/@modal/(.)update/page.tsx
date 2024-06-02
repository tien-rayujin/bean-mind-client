import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPaymentRequestHandler } from "@/lib/services/payment/Handlers";
import { UpdatePaymentForm } from "@/app/manage/payment/components/Form";
import { notFound } from "next/navigation";
import { GetPackageOrdersRequestHandler } from "@/lib/services/packageOrder/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const payment = (await GetPaymentRequestHandler(id)).data;
  const payload = await Promise.all([
    GetPackageOrdersRequestHandler({ pageSize: 20 }),
  ]);
  const packageOrders = payload[0].data?.items;

  if (!payment || !packageOrders) return notFound();

  return (
    <DefaultModal title="Update Payment">
      <div className="w-180">
        <UpdatePaymentForm
          payment={payment}
          payload={{
            packageOrders: packageOrders,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
