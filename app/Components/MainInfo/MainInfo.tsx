export default function MainInfo() {
  return (
    <div className="max-w-350 m-auto flex gap-10 p-10 items-center">
      <div className="bg-[url(/img/avatar-p.png)] bg-cover bg-center h-30 w-30 rounded-full content-center border border-white"></div>
      <div className="flex flex-col gap-3 text-white">
        <h1>Мирослав Куприянов</h1>
        <h2 className="text-2xl">Front-end разработчик</h2>
      </div>
    </div>
  );
}
