import { contactsItems } from "@/app/Data/Contacts";
import { TiContacts } from "react-icons/ti";
export default function Contacts() {
  return (
    <div className="m-auto flex max-w-350 flex-col gap-5 p-10">
      <div className="flex items-center gap-2">
        <TiContacts className="text-main h-10 w-10" />
        <h2>Контакты</h2>
      </div>
      <div className="flex flex-wrap gap-10 rounded-xl border border-gray-200 bg-white p-6">
        {contactsItems.map((item) => (
          <div
            key={item.title}
            className="mr-53 flex w-100 items-center gap-3 max-md:mr-0"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <item.icon className="text-main h-5 w-5" />
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
