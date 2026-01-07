import { DiCode } from "react-icons/di";
import Carousel from "./Carousel";
export default function Portfolio() {
  return (
    <div className="m-auto flex max-w-350 flex-col gap-5 p-10 max-md:max-w-full max-md:p-1">
      <div className="flex items-center gap-2 max-md:pl-6">
        <DiCode className="text-main h-10 w-10" />
        <h2>Портфолио</h2>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 max-md:p-0">
        <Carousel />
      </div>
    </div>
  );
}
