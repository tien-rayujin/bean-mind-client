import { BaseFilter, FilterItemProps } from "@/components/Filter";

const gradelevelFilterDefinition: FilterItemProps[] = [
  {
    name: "isDeleted",
    datas: [
      { display: "All", value: "all" },
      { display: "Active", value: "active" },
      { display: "In-active", value: "inactive" },
    ],
    label: "Status",
  },
];

interface SlotFilterProps {}

const SlotFilter: React.FC<SlotFilterProps> = (props) => {
  return <BaseFilter dataList={gradelevelFilterDefinition} />;
};
export { SlotFilter };
