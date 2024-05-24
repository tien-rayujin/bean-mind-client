"use client";

import { StyFormSelect } from "@/components/Form/FormInput";
import { createPageUrl } from "@/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

interface SubjectFilterProps {}

const SubjectFilter: React.FC<SubjectFilterProps> = (props) => {
  const [terms, setTerms] = useState<Record<string, string>>({});

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const nextUrl = createPageUrl({
      terms,
      pathname,
      searchParams,
    });
    // change the current url
    router.replace(nextUrl);
  }, [terms]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextTerms = {
      ...terms,
      [e.target.name]: e.target.value,
    };
    setTerms(nextTerms);
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <div>
        <StyFormSelect
          name="isDeleted"
          displayProp={"key"}
          valueProp={"value"}
          showLabel={false}
          onChange={handleChange}
          datas={[
            { key: "All", value: "all" },
            { key: "Active", value: "active" },
            { key: "In-active", value: "inactive" },
          ]}
          value={searchParams.get("isDeleted") || ""}
          label={"Status"}
          placeholder="Select Status"
          extras="py-1"
        />
      </div>
    </div>
  );
};

export { SubjectFilter };
