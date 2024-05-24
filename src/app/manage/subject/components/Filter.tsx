import { BaseFilter, FilterItemProps } from "@/components/Filter";

const subjectFilterDefinition: FilterItemProps[] = [
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

interface SubjectFilterProps {}

const SubjectFilter: React.FC<SubjectFilterProps> = (props) => {
  return <BaseFilter dataList={subjectFilterDefinition} />;
};
export { SubjectFilter };
