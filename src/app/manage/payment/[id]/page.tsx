import {
  UpdateButton,
  DeleteButton,
  RestoreButton,
} from "@/components/Form/Button";
import { GetPaymentRequestHandler } from "@/lib/services/payment/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const payment = (await GetPaymentRequestHandler(id)).data;

  if (!payment) return notFound();

  const { amount, paymentDate, paymentStatus, isDeleted, packageOrder } =
    payment;

  return (
    <>
      <div className="col-span-12">
        <div className="relative bg-background  p-8 leading-relaxed">
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Amount:{" "}
            </span>
            {amount}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Payment Date:{" "}
            </span>
            {paymentDate.toDateString()}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Payment Status:{" "}
            </span>
            {paymentStatus}
          </p>
          <div className="flex items-center justify-start gap-2.5">
            <span className="font-semibold tracking-wide text-primary">
              Status:{" "}
            </span>
            <span>{isDeleted ? "Disabled" : "Enabled"}</span>
          </div>
          <p className="block max-w-[50%]">
            <span className="font-semibold tracking-wide text-primary">
              PackageOrder:{" "}
            </span>
            {packageOrder.id}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2.5">
        <Link href={`${id}/update`} className="z-10">
          <UpdateButton />
        </Link>
        {!isDeleted ? (
          <Link href={`${id}/delete`} className="z-10">
            <DeleteButton />
          </Link>
        ) : (
          <Link href={`${id}/restore`} className="z-10">
            <RestoreButton />
          </Link>
        )}
      </div>
    </>
  );
};

export default Page;
