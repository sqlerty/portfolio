import { expirienceItems } from "@/app/Data/WorkExpirience";
import { FiBriefcase } from "react-icons/fi";
export default function WorkExpirience() {
  return (
    <div className="max-w-350 m-auto flex flex-col gap-5 p-10">
      <div className="flex gap-2 items-center">
        <FiBriefcase className="text-main w-10 h-10" />
        <h2>Опыт работы</h2>
      </div>
      <div className="flex flex-col gap-10 bg-white">
        {expirienceItems.map((item) => (
          <div
            key={item.position}
            className="border rounded-xl p-6 border-gray-200 flex justify-between ">
            <div className="">
              <div className="flex flex-col gap-1 mb-12">
                <h2 className="text-main">{item.position}</h2>
                <h3 className="text-gray-700 text-xl">{item.place}</h3>
              </div>
              {item.tasks.map((task) => (
                <ul key={task} className="list-disc pl-6 ">
                  <li className="mb-2 text-gray-800 pl-2">{task}</li>
                </ul>
              ))}
            </div>
            <p className="text-gray-400">{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
