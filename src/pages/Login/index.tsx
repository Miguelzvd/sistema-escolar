import Form from "./components/Form";
import { Logo } from "./components/Logo";

export function Login() {
  return (
    <>
      <div className="fixed top-0 left-0 flex lg:flex-row flex-col w-full justify-center h-full bg-primary drop-shadow-lg">
        
        <div className="lg:w-full lg:h-full flex flex-row justify-center lg:mx-6">
          <Logo />
        </div>

        <div className="lg:w-140 w-full flex justify-center lg:my-0 my-4">
          <div className="lg:w-140 lg:h-full flex flex-row justify-center">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
