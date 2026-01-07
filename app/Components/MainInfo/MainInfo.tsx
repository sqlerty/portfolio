export default function MainInfo() {
  return (
    <div className="m-auto flex max-w-350 items-center gap-10 p-10 max-md:flex-col max-md:text-center">
      <div className="h-30 w-30 content-center rounded-full border border-white bg-[url(/img/avatar-p.png)] bg-cover bg-center"></div>
      <div className="flex flex-col gap-3 text-white">
        <h1>Мирослав Куприянов</h1>
        <h2 className="text-2xl">Front-end разработчик</h2>
      </div>
    </div>
  );
}
