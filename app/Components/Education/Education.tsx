import { HiAcademicCap } from "react-icons/hi";
export default function Education() {
  return (
    <div className="max-w-350 m-auto flex flex-col gap-5 p-10">
      <div className="flex gap-2 items-center">
        <HiAcademicCap className="text-main w-10 h-10" />
        <h2>Образование</h2>
      </div>
      <div className="border rounded-xl p-6 border-gray-200 flex justify-between bg-white">
        <div>
          <h3 className="text-main mb-12">
            Новгородский Государственный университет
          </h3>
          <p className="text-gray-600">
            Бакалавар: кафедра информационных технологий фокультет информатики и
            вычислительной техники
          </p>
        </div>
        <p className="text-gray-400">2022 - Настоящее время</p>
      </div>
    </div>
  );
}
