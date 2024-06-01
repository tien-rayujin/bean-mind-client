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

interface GradeLevelFilterProps {}

const GradeLevelFilter: React.FC<GradeLevelFilterProps> = (props) => {
  return <BaseFilter dataList={gradelevelFilterDefinition} />;
};
export { GradeLevelFilter };
