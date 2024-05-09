import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

// Define type for ErrorCardProps
type ErrorCardProps = {
  errorMessage?: string;
  title?: string;
};

// Define component as a FunctionComponent with ErrorCardProps as props
export const ErrorCard: FunctionComponent<
  PropsWithChildren<ErrorCardProps>
> = ({ errorMessage, title }) => {
  return (
    <a
      href="#"
      className={classNames(
        "block max-w-sm p-6 bg-[#ebc5c3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
      )}
    >
      <h5
        className={classNames(
          "mb-2 text-2xl font-bold tracking-tight text-[#e32012]",
        )}
      >
        {title || "Something went wrong"}
      </h5>
      <p className={classNames("font-normal text-gray-700 dark:text-gray-400")}>
        {errorMessage || "Something went wrong"}
      </p>
    </a>
  );
};
