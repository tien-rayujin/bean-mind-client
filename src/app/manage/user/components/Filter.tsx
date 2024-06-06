import { BaseFilter, FilterItemProps } from "@/components/Filter";

const userFilterDefinition: FilterItemProps[] = [
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

interface UserFilterProps {}

const UserFilter: React.FC<UserFilterProps> = (props) => {
  return <BaseFilter dataList={userFilterDefinition} />;
};
export { UserFilter };
