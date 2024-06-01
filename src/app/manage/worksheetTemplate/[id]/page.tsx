import { StyButton } from "@/components/Button";
import {
  UpdateButton,
  DeleteButton,
  RestoreButton,
} from "@/components/Form/Button";
import { GetWorksheetTemplateRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { WorksheetTemplateClassificationEnum } from "@/lib/types/enum";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const worksheetTemplate = (await GetWorksheetTemplateRequestHandler(id)).data;

  if (!worksheetTemplate) return notFound();

  const {
    classification,
    easyQuestionCount,
    normalQuestionCount,
    hardQuestionCount,
    totalQuestionCount,
    chapter,
    topic,
    subject,
    worksheets,
    isDeleted,
  } = worksheetTemplate;

  return (
    <>
      <div className="col-span-12">
        <div className="relative bg-background p-8 leading-relaxed">
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Classification:{" "}
            </span>
            {/* {WorksheetTemplateClassificationEnum[classification]} */}
            {classification}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              EasyQuestionCount:{" "}
            </span>
            {easyQuestionCount}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              NormalQuestionCount:{" "}
            </span>
            {normalQuestionCount}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              HardQuestionCount:{" "}
            </span>
            {hardQuestionCount}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              TotalQuestionCount:{" "}
            </span>
            {totalQuestionCount}
          </p>
          <p className="block max-w-[50%]">
            <span className="font-semibold tracking-wide text-primary">
              Topic:{" "}
            </span>
            {topic.title}
          </p>
          <p className="block max-w-[50%]">
            <span className="font-semibold tracking-wide text-primary">
              Chapter:{" "}
            </span>
            {chapter.title}
          </p>
          <p className="block max-w-[50%]">
            <span className="font-semibold tracking-wide text-primary">
              Subject:{" "}
            </span>
            {subject.title}
          </p>
          <div className="flex items-center justify-start gap-2.5">
            <span className="font-semibold tracking-wide text-primary">
              Status:{" "}
            </span>
            <span>{isDeleted ? "Disabled" : "Enabled"}</span>
          </div>

          {worksheets &&
            worksheets.map((item, index) => {
              return (
                <p key={item.id} className="block max-w-[50%]">
                  <span className="font-semibold tracking-wide text-primary">
                    Worksheet {index + 1}:{" "}
                  </span>
                  {JSON.stringify(item)}
                  <Link href={`/manage/worksheet/${item.id}`}>
                    <StyButton>Jump to Worksheet</StyButton>
                  </Link>
                </p>
              );
            })}
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
