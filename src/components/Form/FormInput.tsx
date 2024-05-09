import clsx from "clsx";

interface BaseFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode; // Icon prop
  extras?: string;
}

const StyFormInput: React.FC<BaseFormInputProps> = ({
  icon,
  extras,
  ...rest
}) => {
  return (
    <div className="StyFormInput flex items-center rounded-md border border-stroke bg-whiten px-3 py-2 text-base font-normal text-body transition-all duration-200 ease-linear focus:border-primary focus:outline-none focus:ring">
      {icon && <span className="mr-2">{icon}</span>}
      <input
        {...rest}
        className={clsx("w-full bg-transparent focus:outline-none", extras)}
      />
    </div>
  );
};

interface BaseFormSelectProps<T extends Record<string, unknown>>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode; // Icon prop
  extras?: string;
  placeholder?: string;
  datas?: T[];
  displayProp: Extract<keyof T, string>;
  valueProp: Extract<keyof T, string>;
}

const StyFormSelect = function <T extends Record<string, unknown>>({
  icon,
  extras,
  placeholder,
  datas,
  displayProp,
  valueProp,
  ...rest
}: BaseFormSelectProps<T>) {
  const optionDatas =
    !datas || !datas.length ? (
      <option>No data</option>
    ) : (
      datas.map((data, idx) => (
        <option
          key={`${data}__${idx}`}
          value={String(data[valueProp] || data["id"])}
        >
          {String(data[displayProp])}
        </option>
      ))
    );

  return (
    <div className="StyFormInput flex items-center rounded-md border border-stroke bg-whiten px-3 py-2 text-base font-normal text-body transition-all duration-200 ease-linear focus:border-primary focus:outline-none focus:ring">
      {icon && <span className="mr-2">{icon}</span>}
      <select
        {...rest}
        className={clsx("w-full bg-transparent focus:outline-none", extras)}
      >
        <option disabled>{placeholder || "Please select item"}</option>
        {optionDatas}
      </select>
    </div>
  );
};

export { StyFormInput, StyFormSelect };
