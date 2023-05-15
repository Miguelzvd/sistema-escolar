import { Dispatch, SetStateAction } from "react";
export type NavMobile = {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>> ;
}