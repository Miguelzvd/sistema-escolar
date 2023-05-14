import React from 'react'

type Props = {
    text: string;
    name: string;
    children: React.ReactNode;
  }


export function CostumSelect({text, name, children}:Props) {
    return(
        <select name={ name }>
            {children}
        </select>
    );
}