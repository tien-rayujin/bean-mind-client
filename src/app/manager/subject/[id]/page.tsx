import { AlertSnack } from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import { ActionButton } from "@/components/Form/Button";
import { seed_Subjects } from "@/lib/seed";
import { FaEye, FaFolder, FaPen, FaSearch, FaTrash } from "react-icons/fa";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = (props) => {
  const { id } = props.params;
  const itemDetail = seed_Subjects.find((x) => x.id === id);

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Subject Detail" />

      <div className="grid h-full max-h-full flex-1 grid-cols-12 gap-4">
        {/* Content */}
        <div className="col-span-9">
          <AlertSnack
            status="success"
            message="Update successful"
            extras="mb-6"
          />

          <div className="relative bg-secondary/30 p-12 leading-relaxed">
            {/* Action button */}
            <div className="absolute right-4 top-4 flex items-center gap-2.5">
              <ActionButton color="primary" icon={<FaPen size={16} />} />
              <ActionButton color="accent" icon={<FaTrash size={16} />} />
            </div>

            <p>
              <span className="font-semibold tracking-wide text-primary">
                Title:{" "}
              </span>
              {itemDetail?.title}
            </p>
            <p className="block max-w-[50%]">
              <span className="font-semibold tracking-wide text-primary">
                Description:{" "}
              </span>
              {itemDetail?.description}
            </p>
            <p>
              <span className="font-semibold tracking-wide text-primary">
                Status:{" "}
              </span>
              {itemDetail?.isDeleted ? "Disabled" : "Enabled"}
            </p>
          </div>
        </div>

        {/* Directory */}
        <div className="scrollbar col-span-3 overflow-auto">
          {/* <h2 className="text-title mb-6 font-semibold text-primary">
              Course list
            </h2> */}
          <div className="grid grid-cols-1 gap-2.5 bg-secondary/30 p-8">
            {/* Search bar */}
            <div className="relative h-12 rounded-md bg-secondary/30">
              <input
                type="text"
                className="h-full w-full bg-transparent pl-4 pr-12 outline-none"
                placeholder="Search..."
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Directory list */}
            <StyDirectoryItem name="Grade 1" />
            <StyDirectoryItem name="Grade 2" />
            <StyDirectoryItem name="Grade 3" />
            <StyDirectoryItem name="Grade 4" />

            <StyDirectoryItem name="Grade 5" />
            <StyDirectoryItem name="Grade 6" />
            <StyDirectoryItem name="Grade 7" />
            <StyDirectoryItem name="Grade 8" />

            <StyDirectoryItem name="Grade 5" />
            <StyDirectoryItem name="Grade 6" />
            <StyDirectoryItem name="Grade 7" />
            <StyDirectoryItem name="Grade 8" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface StyDirectoryItemProps {
  name: string;
}

const StyDirectoryItem: React.FC<StyDirectoryItemProps> = (props) => {
  return (
    <div className="relative flex w-full items-center gap-2.5 rounded-md bg-background/50 p-2.5 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
      <FaFolder strokeWidth={1.25} className="text-primary" />
      <h2 className="font-semibold text-primary">{props.name}</h2>
      {/* <FaEye className="text-accent" /> */}
      {/* <span className="font-semibold text-accent">/</span> */}
      <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-accent" />
    </div>
  );
};

export default Page;
