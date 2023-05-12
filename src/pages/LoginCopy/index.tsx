import Form from "./components/Form";
import { Logo } from "./components/Logo";

export function LoginCopy() {
  return (
    <>
      <div className="flex flex-row w-full justify-between h-screen bg-blue">
        
        <div className="w-full h-full flex flex-row justify-center items-center">
          <h1>Logo</h1>
        </div>

        <div className="">
          <Form />
        </div>
      </div>
    </>
  );
}
