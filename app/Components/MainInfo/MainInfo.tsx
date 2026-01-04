export default function MainInfo() {
  return (
    <div className="max-w-350 m-auto flex gap-10 p-10">
      <div className="bg-[url(/img/avatar-p.png)] bg-cover bg-center w-80 h-45 rounded-[50%] content-center border border-white"></div>
      <div className="flex flex-col gap-3 text-white">
        <h1>Мирослав Куприянов</h1>
        <p className="text-2xl">Front-end разработчик</p>
        <p>
          Учусь в университете на 4 курсе. Веб разработкой начал интересоваться
          1.5 года назад. С тех пор успел от простой верстки перейти на React, а
          после пройти стажировку, где разрабатывал лендинг на NextJS+TS под
          руководством наставника.
        </p>
      </div>
    </div>
  );
}
