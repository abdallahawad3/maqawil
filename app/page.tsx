import About from "@/components/About";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <Hero />
      </div>

      <Services />
      <About />
      <Contact />
    </main>
  );
}
