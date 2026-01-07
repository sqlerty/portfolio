import { DiCode } from "react-icons/di";
import Carousel from "./Carousel";
export default function Portfolio() {
  return (
    <div className="max-w-350 m-auto flex flex-col gap-5 p-10 max-md:max-w-full max-md:p-1">
      <div className="flex gap-2 items-center max-md:pl-6">
        <DiCode className="text-main w-10 h-10" />
        <h2>Портфолио</h2>
      </div>
      <div className="border rounded-xl p-6 border-gray-200 bg-white max-md:p-0">
        <Carousel />
      </div>
    </div>
  );
}
