import React from "react";

type Props = {
  children: React.ReactNode;
};

export function NavLinkList({ children }: Props) {
  return (
    <ul
      className=" 
      scale-0
      md:scale-100
      duration-300
      flex 
      items-center
      gap-10
      "
      >
      {children}
    </ul>
  );
}
