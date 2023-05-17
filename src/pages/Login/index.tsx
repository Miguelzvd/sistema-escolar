import Form from "./components/Form";
import { Logo } from "./components/Logo";

export function Login() {
  return (
    <>
        <div className="w-full h-screen sm:h-full md:h-screen bg-primary flex flex-col gap-10 md:flex-row  scroll-auto justify-between items-center">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-48 mt-6 sm:w-60">
              <Logo />
            </div>
          </div>

          <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white rounded-md h-fit mb-6 p-0 sm:p-4 flex flex-col items-center justify-center">
              <Form />
            </div>
          </div>
        </div>
    </>
  );
}
