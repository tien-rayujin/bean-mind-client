"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, ChangeEvent, useEffect } from "react";
import { StyFormSelect } from "./Form/FormInput";
import { createPageUrl } from "@/lib/utils";
import clsx from "clsx";

interface BaseFilterProps {
  dataList: FilterItemProps[];
}

const BaseFilter: React.FC<BaseFilterProps> = (props) => {
  const { dataList } = props;
  const [terms, setTerms] = useState<Record<string, string>>({});

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextTerms = {
      ...terms,
      [e.target.name]: e.target.value,
    };
    setTerms(nextTerms);
  };

  useEffect(() => {
    const nextUrl = createPageUrl({
      terms,
      pathname,
      searchParams,
    });
    router.replace(nextUrl);
  }, [terms, router, pathname, searchParams]);

  return (
    <div className={clsx("grid grid-cols-6 gap-4")}>
      {dataList &&
        dataList.map((data, idx) => {
          const key = "__select__" + data.label + idx;

          return (
            <FilterItem
              {...data}
              key={key}
              value={searchParams.get(data.name) || ""}
              onChange={handleChange}
            />
          );
        })}
    </div>
  );
};

type FilterDataItem = {
  display: string;
  value: string;
};

interface FilterItemProps {
  name: string;
  displayProp?: keyof FilterDataItem;
  valueProp?: keyof FilterDataItem;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  datas: FilterDataItem[];
  value?: string;
  label: string;
  placeholder?: string;
}

const FilterItem: React.FC<FilterItemProps> = (props) => {
  const mappedProps = {
    ...props,
    displayProp: props.displayProp || "display",
    valueProp: props.displayProp || "value",
    value: props.value || "",
    placeholder:
      props.placeholder || `Select ${props.label.toLocaleLowerCase()}`,
  };

  return (
    <div>
      <StyFormSelect {...mappedProps} extras="py-1" showLabel={false} />
    </div>
  );
};

export { type FilterItemProps, BaseFilter };
