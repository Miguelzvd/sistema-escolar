import React from "react";

type Props = {
  children: React.ReactNode;
};

export function NavLinkList({ children }: Props) {
  return (
    <ul
      className=" 
      hidden
      md:flex 
      items-center
      gap-10
      "
      >
      {children}
    </ul>
  );
}
