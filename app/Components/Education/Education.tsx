import { HiAcademicCap } from "react-icons/hi";
export default function Education() {
  return (
    <div className="m-auto flex max-w-350 flex-col gap-5 p-10">
      <div className="flex items-center gap-2">
        <HiAcademicCap className="text-main h-10 w-10" />
        <h2>Образование</h2>
      </div>
      <div className="flex justify-between rounded-xl border border-gray-200 bg-white p-6">
        <div className="w-full">
          <div className="mb-12 flex justify-between max-md:flex-col max-md:gap-2">
            <h3 className="text-main max-md">
              Новгородский Государственный университет
            </h3>
            <p className="text-gray-400">2022 - Настоящее время</p>
          </div>
          <p className="text-gray-600">
            Бакалавар: кафедра информационных технологий, факультет информатики
            и вычислительной техники
          </p>
        </div>
      </div>
    </div>
  );
}
