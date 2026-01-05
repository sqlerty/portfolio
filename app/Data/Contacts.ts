import { IconType } from "react-icons";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CgWorkAlt } from "react-icons/cg";
export interface contactsItems{
    icon:IconType;
    title:string;
    contact:string;
    ref:string;
}
export const contactsItems:contactsItems[] = [
    {icon:MdOutlineEmail,title:"Email" ,contact:"sqlerty@yandex.ru",ref:"##"},
    {icon:FaPhone,title:"Телефон" ,contact:"+ 7 (960) 201-97-83",ref:"##"},
    {icon:IoLocationOutline,title:"Местоположение" ,contact:"Великий Новгород, Россия",ref:"##"},
    {icon:FiGithub,title:"GitHub" ,contact:"https://github.com/sqlerty",ref:"https://github.com/sqlerty"},
    {icon:CgWorkAlt,title:"hh.ru" ,contact:"clck.ru/3RAJ8L",ref:"https://novgorod.hh.ru/resume/9c43d6deff0f7d80e90039ed1f5a4669556"},
]