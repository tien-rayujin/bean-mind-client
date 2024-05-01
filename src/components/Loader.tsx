import clsx from "clsx";

interface LoaderProps {
  extras?: string;
}

const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <div
      className={clsx(
        "h-6 w-6 animate-spin rounded-full border-2 border-solid border-text border-t-transparent",
        props.extras,
      )}
    ></div>
  );
};

export default Loader;
