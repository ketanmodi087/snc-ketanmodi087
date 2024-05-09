import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

import { PersonType } from "@/utils/types";

// Define type for PersonDataCardProps
type PersonDataCardProps = {
  data: PersonType;
};

// Define Card component as a FunctionComponent with PersonDataCardProps as props
export const PersonDataCard: FunctionComponent<
  PropsWithChildren<PersonDataCardProps>
> = ({ data }) => {
  return (
    <a
      href="#"
      className={classNames(
        "flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
      )}
    >
      <img
        className={classNames(
          "object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg",
        )}
        src={data?.profilePictureUrl}
        alt=""
      />
      <div
        className={classNames(
          "flex flex-col justify-between p-4 pl-8 leading-normal w-72",
        )}
      >
        <h5
          className={classNames(
            "mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
          )}
        >
          {data?.name}
        </h5>
        <p
          className={classNames(
            "mb-4 font-normal text-gray-700 dark:text-gray-400",
          )}
        >
          {data?.title}
        </p>
        <p
          className={classNames(
            "mb-1 font-normal text-gray-700 dark:text-gray-400",
          )}
        >
          Followers: {data?.followers}
        </p>
        <p
          className={classNames(
            "mb-3 font-normal text-gray-700 dark:text-gray-400",
          )}
        >
          Following: {data?.following}
        </p>
      </div>
    </a>
  );
};
