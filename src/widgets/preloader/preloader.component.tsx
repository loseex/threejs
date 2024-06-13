import { FC } from "react";
import { Spinner } from "flowbite-react";

export const Preloader: FC = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">
      <div className="text-center flex flex-col gap-10">
        <div className="flex justify-center items-center mb-5">
          <img
            className="w-1/4"
            src="/IThublogo.3f2e17a2ba3f1a8d0302.png"
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-white font-bold text-3xl">Загрузка...</h5>
          <p className="text-gray-500">Это может занять несколько минут.</p>
        </div>
        <Spinner color="purple" />
      </div>
    </div>
  );
};
