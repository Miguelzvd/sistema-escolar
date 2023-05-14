import React from "react";

type Props = {
  children: React.ReactNode;
};

export function NavLinkList({ children }: Props) {
  return (
    <ul
      className=" 
      hidden
      lg:flex 
      md:items-center
      gap-10
      "
      >
      {children}
    </ul>
  );
}
