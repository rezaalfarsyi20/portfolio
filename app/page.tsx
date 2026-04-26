import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import ManifestoFlow from "@/components/manifesto-flow";
import Stack from "@/components/sections/stack";
import Roadmap from "@/components/sections/roadmap";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import ThemeSwitcher from "@/components/settings/theme-switcher";
import ScrollProgress from "@/components/scroll-progress";
import LanguageSwitcher from "@/components/settings/language-switcher";
import ComingSoon from "@/components/sections/coming-soon";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <div className="fixed top-2 sm:top-5 right-2 sm:right-5 flex gap-2 z-50">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

      <main className="bg-background relative">
        <Hero />

        <div className="relative z-10 bg-background border-t border-border">

          <About />

          <ManifestoFlow />

          <Stack />

          <ManifestoFlow reverse />

          <Projects />

          <ManifestoFlow />

          <Roadmap />

          <ManifestoFlow reverse />

          <Contact />

        </div>
      </main >
    </>
  );
}