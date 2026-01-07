import { expirienceItems } from "@/app/Data/WorkExpirience";
import { FiBriefcase } from "react-icons/fi";
export default function WorkExpirience() {
  return (
    <div className="m-auto flex max-w-350 flex-col gap-5 p-10">
      <div className="flex items-center gap-2">
        <FiBriefcase className="text-main h-10 w-10" />
        <h2>Опыт работы</h2>
      </div>
      <div className="flex flex-col gap-10 bg-white">
        {expirienceItems.map((item) => (
          <div
            key={item.position}
            className="flex rounded-xl border border-gray-200 p-6"
          >
            <div className="w-full">
              <div className="flex justify-between max-md:mb-12 max-md:flex-col">
                <div className="mb-12 flex flex-col gap-1 max-md:mb-1">
                  <h2 className="text-main">{item.position}</h2>
                  <h3 className="text-xl text-gray-700">{item.place}</h3>
                </div>
                <p className="text-gray-400">{item.data}</p>
              </div>
              {item.tasks.map((task) => (
                <ul key={task} className="w-full list-disc pl-6">
                  <li className="mb-2 pl-2 text-gray-800">{task}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
