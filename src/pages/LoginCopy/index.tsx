import Form from "./components/Form";
import { Logo } from "./components/Logo";

export function LoginCopy() {
  return (
    <>
      <div className="fixed top-0 left-0 flex flex-row w-full justify-between h-screen bg-primary drop-shadow-md">
        
        <div className="w-full h-full flex flex-row justify-center items-center">
          <Logo></Logo>
        </div>

        <div className="w-140">
          <Form />
        </div>
        
      </div>
    </>
  );
}
