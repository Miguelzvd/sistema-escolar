import Form from "./components/Form";
import { Logo } from "./components/Logo";

export function Login() {
  return (
    <>
        <div className="scroll-auto w-full min-h-screen md:h-screen bg-primary flex flex-col md:flex-row justify-around md:justify-between items-center gap-4 md:gap-0">
          <div className="w-full h-full mt-4 md:mt-0 flex justify-center items-center">
            <div className="w-64 sm:w-72 md:w-96">
              <Logo />
            </div>
          </div>

          <div className="w-full h-full mb-4 md:mb-0 md:w-140 flex justify-center items-center">
              <Form />
          </div>
        </div>
    </>
  );
}
