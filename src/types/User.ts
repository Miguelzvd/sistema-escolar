export type User = {
    id: number;
    name: string;
    cpf: string;
    userType: string;
    password: string;
}
export type UserStorage = {
    cpf: string;
    userType: string;
    password: string;
}