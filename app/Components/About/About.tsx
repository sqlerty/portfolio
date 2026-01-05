import { BiCalendarCheck } from "react-icons/bi";
export default function About() {
  return (
    <div className="max-w-350 m-auto flex flex-col gap-5 p-10 ">
      <div className="flex gap-2 items-center">
        <BiCalendarCheck className="text-main w-10 h-10" />
        <h2>О себе</h2>
      </div>
      <div className="border rounded-xl p-6 border-gray-200 bg-white">
        <p className="text-gray-700">
          Учусь в университете на 4 курсе. Веб разработкой начал интересоваться
          1.5 года назад. С тех пор успел от простой верстки перейти на React, а
          после пройти стажировку, где разрабатывал лендинг на NextJS+TS под
          руководством наставника.
        </p>
      </div>
    </div>
  );
}
