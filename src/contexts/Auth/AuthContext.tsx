/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { User } from "src/types";
import { createContext } from "react";

export type AuthContextType = {
    user: User | null;
    signin: (cpf: string, password:string, userType:string) => Promise<boolean>;
    signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);