import { HiAcademicCap } from "react-icons/hi";
export default function About() {
  return (
    <div className="max-w-350 m-auto flex flex-col gap-5 p-10">
      <div className="flex gap-2 items-center">
        <HiAcademicCap className="text-main w-10 h-10" />
        <h2>О себе</h2>
      </div>
      <div className="border rounded-xl p-6 border-gray-200">
        <p className="text-gray-700">
          Я passionate разработчик, который любит превращать сложные проблемы в
          простые и красивые решения. Мой путь в IT начался с создания небольших
          веб-сайтов, и с тех пор я постоянно развиваюсь, изучая новые
          технологии и подходы к разработке. В свободное время увлекаюсь
          open-source проектами, читаю технические блоги и экспериментирую с
          новыми фреймворками. Верю в чистый код, хорошую документацию и
          командную работу.
        </p>
      </div>
    </div>
  );
}
