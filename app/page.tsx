import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Education from "./Components/Education/Education";
import MainInfo from "./Components/MainInfo/MainInfo";
import Skills from "./Components/Skills/Skills";
import WorkExpirience from "./Components/WorkExpirience/WorkExpirience";

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
          <Education />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <WorkExpirience />
        </section>
        <section>
          <Contacts />
        </section>
      </main>
    </div>
  );
}
