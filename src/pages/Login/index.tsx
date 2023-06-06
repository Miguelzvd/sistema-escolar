import { IconeLogin } from "../../iconComponents/General";
import Form from "./Form";

export function Login() {
  return (
    <>
      <div className="bg-secundaryDark scroll-auto w-full min-h-screen md:h-screen flex flex-col md:flex-row justify-evenly md:justify-between items-center gap-6 md:gap-0">
        <div className="w-full h-full mt-4 md:mt-0 flex justify-center items-center">
          <div className="w-64 md:w-96 lg:128">
            <IconeLogin className="w-full h-full" />
          </div>
        </div>

        <div className="w-full h-full mb-4 md:mb-0 md:w-140 lg:w-160 duration-200 flex justify-center items-center">
          <Form />
        </div>
      </div>
    </>
  );
}
