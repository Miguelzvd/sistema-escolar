import { Dispatch, SetStateAction } from "react";
export type INavMobileContext = {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>> ;
}