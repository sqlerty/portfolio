import About from "./Components/About/About";
import MainInfo from "./Components/MainInfo/MainInfo";

export default function Home() {
  return (
    <div>
      <header className="bg-main">
        <MainInfo />
      </header>
      <main>
        <section>
          <About />
        </section>
      </main>
    </div>
  );
}
