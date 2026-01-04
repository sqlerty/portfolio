import About from "./Components/About/About";
import MainInfo from "./Components/MainInfo/MainInfo";
import Skills from "./Components/Skills/Skills";

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
        <section>
          <Skills />
        </section>
      </main>
    </div>
  );
}
