type Props = {
    children: React.ReactNode;
}

export function NavLinks({ children }:Props){
    return(
        <>
            <ul className="flex flex-col items-stretch justify-center">
                {children}
            </ul>
        </>
    )
}