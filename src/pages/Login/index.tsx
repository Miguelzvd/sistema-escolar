import Form from "./components/Form";
import { Logo } from "./components/Logo";

export function Login() {
  return (
    <>
      <div className="fixed top-0 left-0 flex lg:flex-row flex-col w-full h-full overflow-x-auto justify-center bg-primary drop-shadow-lg">
        <div className="lg:w-full lg:h-full flex flex-row justify-center">
          <Logo />
        </div>

        <div className="lg:w-140 w-full flex justify-center lg:my-0 my-4">
          <div className="lg:w-full lg:h-full md:w-96 w-80">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
