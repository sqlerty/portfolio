import { BiCalendarCheck } from "react-icons/bi";
export default function About() {
  return (
    <div className="m-auto flex max-w-350 flex-col gap-5 p-10">
      <div className="flex items-center gap-2">
        <BiCalendarCheck className="text-main h-10 w-10" />
        <h2>О себе</h2>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <p className="text-gray-700">
          Учусь в университете на 4 курсе. Веб разработкой начал интересоваться
          1.5 года назад. С тех пор успел от простой верстки перейти на React, а
          после пройти стажировку, где разрабатывал лендинг на NextJS+TS под
          руководством наставника.За это время науичлся работать с NextJS, TS,
          TailwindCSS, GitLab, Git.
        </p>
      </div>
    </div>
  );
}
