/* eslint-disable no-constant-condition */
import { GiHamburgerMenu } from "react-icons/Gi";
import { useNavMobileContext } from "../../contexts";

export function HamburgerMenu() {
  return (
    <div className="lg:hidden flex">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? (
          <span className="font-bold text-3xl text-white">X</span>
        ) : (
          <GiHamburgerMenu size={40} color={"#FFFFFF"} />
        )}
      </button>
    </div>
  );
}
