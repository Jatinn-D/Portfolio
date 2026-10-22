import { About } from "./components/site/About";
import { Contact } from "./components/site/Contact";
import { Experience } from "./components/site/Experience";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { Process } from "./components/site/Process";
import { Work } from "./components/site/Work";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Process />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  );
}
