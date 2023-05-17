/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { User } from "../../types";
import { createContext } from "react";

export type AuthContextType = {
    user: User | null;
    signin: (matricula: string, password:string) => Promise<boolean>;
    signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);