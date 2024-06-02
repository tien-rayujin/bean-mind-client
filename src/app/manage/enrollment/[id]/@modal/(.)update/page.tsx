import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetEnrollmentRequestHandler } from "@/lib/services/enrollment/Handlers";
import { UpdateEnrollmentForm } from "@/app/manage/enrollment/components/Form";
import { notFound } from "next/navigation";
import { GetPackageOrdersRequestHandler } from "@/lib/services/packageOrder/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const enrollment = (await GetEnrollmentRequestHandler(id)).data;
  const payload = await Promise.all([
    GetPackageOrdersRequestHandler({ pageSize: 20 }),
  ]);
  const packageOrders = payload[0].data?.items;

  if (!enrollment || !packageOrders) return notFound();

  return (
    <DefaultModal title="Update Enrollment">
      <div className="w-180">
        <UpdateEnrollmentForm
          enrollment={enrollment}
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

export default UpdateInterceptRoute;
