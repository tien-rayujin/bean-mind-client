import React from "react";
import { CreateEnrollmentForm } from "@/app/manage/enrollment/components/Form";
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
    <DefaultModal title="Create Enrollment">
      <div className="w-180">
        <CreateEnrollmentForm
          payload={{
            packageOrders: packageOrders,
            lecturers: [],
            students: [],
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
