import classNames from "classnames";
import React from "react";

type Props = {
  text: string;
  textColor?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

export default function Button({
  text,
  onClick,
  textColor = "text-white",
  color = "bg-primaryLight",
  children,
}: Props) {
  return (
    <>
      <button
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
