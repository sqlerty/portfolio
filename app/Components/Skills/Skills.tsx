import { FaAward } from "react-icons/fa";
import { skillsItems } from "./../../Data/Skills";
export default function Skills() {
  return (
    <div className="m-auto flex max-w-350 flex-col gap-5 p-10">
      <div className="flex items-center gap-2">
        <FaAward className="text-main h-10 w-10" />
        <h2>Ключевые навыки</h2>
      </div>
      <div className="flex flex-wrap justify-between gap-10">
        {skillsItems.map((item) => (
          <div
            key={item.title}
            className="flex w-160 flex-col justify-between rounded-xl border border-gray-200 bg-white p-6"
          >
            <h3 className="text-main mb-12">{item.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <li key={skill} className="rounded-2xl bg-gray-200 p-1.5">
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
