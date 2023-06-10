
interface IinputAluno{
    text:string,
    inputType:string,
    htmlFor:string,
    id: string,
    placeHolder:string,
    name: string,
    maxLength: 11,
    errorsMessage:any,
    errors:any,
}

export const inputDataAluno:IinputAluno[] = [
    {
        text:"RG",
        inputType:"text",
        htmlFor:"rg",
        id:"rg",
        placeHolder:"Digite seu RG",
        name: "rg",
        maxLength: 11,
        errorsMessage: Error,
        errors: Error
    },
    
]


