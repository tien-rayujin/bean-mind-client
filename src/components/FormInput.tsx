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

export default StyFormInput;
