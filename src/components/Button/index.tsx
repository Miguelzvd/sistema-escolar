import classNames from "classnames";
import React from "react";

type Props = {
  text: string;
  textColor?: string;
  color?: string;
  type?:  "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
};

export function Button({
  text,
  onClick,
  textColor = "text-white",
  color = "bg-primaryLight",
  children,
  type
}: Props) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={classNames(
          "w-full p-3 drop-shadow-lg shadow-md rounded hover:bg-secundary duration-200 font-semibold",
          textColor,
          color
        )}
      >
        {children}
        {text}
      </button>
    </>
  );
}
