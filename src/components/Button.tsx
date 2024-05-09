import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";
import { ButtonProps } from "@/utils/types";

// Define Button component as a FunctionComponent with ButtonProps as props
export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  active,
  classname,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        `px-2 py-1 border border-black ${active ? "bg-[#5351b3] text-[#f2f2ff]" : ""} ${classname}`,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
