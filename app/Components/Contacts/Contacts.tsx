import { contactsItems } from "@/app/Data/Contacts";
import { TiContacts } from "react-icons/ti";
export default function Contacts() {
  return (
    <div className="max-w-350 m-auto flex flex-col gap-5 p-10">
      <div className="flex gap-2 items-center">
        <TiContacts className="text-main w-10 h-10" />
        <h2>Контакты</h2>
      </div>
      <div className="flex flex-wrap border rounded-xl p-6 border-gray-200 bg-white gap-10">
        {contactsItems.map((item) => (
          <div
            key={item.title}
            className="flex gap-3  items-center w-100 mr-53">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-main" />
            </div>
            <div>
              <p>{item.title}</p>
              <a href={item.ref} className="text-blue-600 hover:underline">
                {item.contact}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
