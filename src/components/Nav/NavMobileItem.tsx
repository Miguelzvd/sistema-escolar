type Props = {
  children:React.ReactNode;
};

export function NavMobileItem({ children }: Props) {
  return (
    <>
      <li className="w-full p-4 border-b border-gray-100 text-xl font-bold">{children}</li>
    </>
  );
}
