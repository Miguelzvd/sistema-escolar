type Props = {
    children: React.ReactNode;
}

export function NavMobileLinkList({ children }:Props){
    return(
        <>
            <ul className="md:hidden flex flex-col items-stretch justify-center">
                {children}
            </ul>
        </>
    )
}