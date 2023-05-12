import Form from "./components/Form";
import { Logo } from "./components/Logo";

export function LoginCopy() {
  return (
    <>
      <div className="flex flex-row w-full justify-between h-screen bg-blue">
        
        <div className="w-1/2 h-full">
          <Logo />
        </div>

        <div className="w-1/4">
          <Form />
        </div>
      </div>
    </>
  );
}
