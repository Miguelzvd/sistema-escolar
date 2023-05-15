/* eslint-disable no-constant-condition */
import { GiHamburgerMenu } from "react-icons/Gi";
import { useNavMobileContext } from "../../../contexts";
import { NavMobileLinkList } from "../index";

type Props = {
  children: React.ReactNode;
};

export function HamburgerMenu({ children }: Props) {
  const { isVisible, setIsVisible } = useNavMobileContext();
  return (
    <div className="md:hidden flex">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? (
          <span className="font-bold text-3xl text-white">X</span>
        ) : (
          <GiHamburgerMenu size={40} color={"#FFFFFF"} />
        )}
      </button>

      {/* hamburger itmes */}
      {isVisible && (
        <div
          className="
            w-full
            h-[calc(100vh-5.0625rem)]
            fixed
            top-20
            left-0
            bg-white 
          "
        >
          <NavMobileLinkList>{children}</NavMobileLinkList>
        </div>
      )}
    </div>
  );
}
