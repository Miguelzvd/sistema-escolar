/* eslint-disable no-constant-condition */
import { GiHamburgerMenu } from "react-icons/Gi";

export function HamburgerMenu(){
    return(
        <>
        <div className="lg:hidden flex">
          <button onClick={() => console.log("Botao funcionando")}>
            {true ?
             (<GiHamburgerMenu size={40} color={"#FFFFFF"} />) 
            : 
            (<span className="font-bold text-3xl text-white">X</span>)}
          </button>
        </div>
        </>
    )
}