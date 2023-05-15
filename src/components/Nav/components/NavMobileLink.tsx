import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useNavMobileContext } from "../../../contexts/";

type Props = {
  to: string;
  variant?: "default" | "hover";
  children: React.ReactNode;
};

export function NavMobileLink({ children, to, variant = "default" }: Props) {
  let bgColor =
    "bg.white hover:bg-gray-100 active:bg-gray-200 transition-all text-black";

  if (variant === "hover") {
    bgColor =
      "bg.white hover:bg-gray-100 active:bg-gray-200 transition-all text-white";
  }

  // push na navegação
  const navigate = useNavigate();
  const { setIsVisible } = useNavMobileContext();

  function handleButtonClick() {
    navigate(to);
    setIsVisible(false);
  }

  return (
    <button onClick={handleButtonClick}>
      <li
        className={classNames(
          "w-full p-6 border-b border-gray-100 text-xl font-bold flex justify-items-start",
          bgColor
        )}
      >
        {children}
      </li>
    </button>
  );
}
