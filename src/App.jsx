import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import useTheme from "./hooks/useTheme";
import useActiveSection from "./hooks/useActiveSection";
import useSpotlight from "./hooks/useSpotlight";
import { NAV } from "./data/content";

const SECTION_IDS = NAV.map(([id]) => id);

export default function App() {
  const [dark, toggleTheme] = useTheme();
  const active = useActiveSection(SECTION_IDS);
  const spotlight = useSpotlight();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--soft)] antialiased transition-colors duration-300 selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <div ref={spotlight} className="pointer-events-none fixed inset-0 z-0 hidden lg:block" />
      <Navbar dark={dark} onToggle={toggleTheme} />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 sm:px-12 lg:flex lg:justify-between lg:gap-8">
        <Sidebar active={active} />

        <main className="pb-8 pt-16 lg:w-[58%] lg:py-28">
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
