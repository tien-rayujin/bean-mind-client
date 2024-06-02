import React from "react";
import { CreatePaymentForm } from "@/app/manage/payment/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetPackageOrdersRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetPackageOrdersRequestHandler({ pageSize: 20 }),
  ]);
  const packageOrders = payload[0].data?.items;

  if (!packageOrders) return notFound();

  return (
    <DefaultModal title="Create Payment">
      <div className="w-180">
        <CreatePaymentForm
          payload={{
            packageOrders: packageOrders,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
