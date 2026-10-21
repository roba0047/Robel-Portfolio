import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav, scrollToId } from "@/components/portfolio/Nav";
import { About, Experience, Founder, Hero, Projects, Services, Skills } from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Robel Haftu — Full-Stack Software Developer";
const description =
  "Robel Haftu is a Full-Stack Software Developer and founder of MD's Software Solutions, building websites, web apps, business systems and AI-powered solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [prefill, setPrefill] = useState("");
  const pick = (s: string) => {
    setPrefill(s);
    scrollToId("contact");
  };
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services onPick={pick} />
        <Founder onPick={pick} />
        <Contact prefill={prefill} />
      </main>
      <Footer />
    </>
  );
}
