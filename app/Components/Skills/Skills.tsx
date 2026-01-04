import { FaAward } from "react-icons/fa";
import { skillsItems } from "./../../Data/Skills";
export default function Skills() {
  return (
    <div className="max-w-350 m-auto flex flex-col gap-5 p-10">
      <div className="flex gap-2 items-center">
        <FaAward className="text-main w-10 h-10" />
        <h2>Ключевые навыки</h2>
      </div>
      <div className="flex flex-wrap gap-10 justify-between">
        {skillsItems.map((item) => (
          <div
            key={item.title}
            className="border rounded-xl p-6 border-gray-200 flex flex-col justify-between w-160">
            <h3 className="mb-12 text-main">{item.title}</h3>
            <ul className="flex gap-2 flex-wrap">
              {item.skills.map((skill) => (
                <li key={skill} className=" bg-gray-200 rounded-2xl p-1.5">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
