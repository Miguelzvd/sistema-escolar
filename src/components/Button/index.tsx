import classNames from "classnames";
import React from "react";

type Props = {
  text: string;
  textColor?: string;
  color?: string;
  hoverBG?: string;
  type?:  "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  padding?: string;
};

export function Button({
  text,
  onClick,
  padding = "p-3", 
  textColor = "text-white",
  color = "bg-primaryLight",
  hoverBG = "hover:bg-secundary",
  children,
  type
}: Props) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={classNames(
          "w-full drop-shadow-lg shadow-md bg rounded duration-200 font-semibold ",
          textColor,
          color, 
          hoverBG,
          padding
        )}
      >
        {children}
        {text}
      </button>
    </>
  );
}
