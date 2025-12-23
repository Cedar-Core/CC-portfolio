import {
  Navbar,
  HeroSection,
  ServicesSection,
  TechExpertise,
  ProjectsSection,
  ProcessSection,
  ClientsSection,
  AboutSection,
  ContactSection,
  Footer,
} from "@/components/ui-components";
import { GlitchBackground } from "@/components/ui-components/shared";

export default function Home() {
  return (
    <>
      {/* Cinematic glitch background effect */}
      <GlitchBackground
        intensity="medium"
        showGrid
        showParticles
        showScanlines
      />

      <Navbar />
      <main className="relative z-10">
        {/* Hero - Value proposition with capabilities preview */}
        <HeroSection />

        {/* Services - What we offer */}
        <ServicesSection />

        {/* Tech Expertise - Technology grid */}
        <TechExpertise />

        {/* Case Studies - Projects with challenge/solution/result */}
        <ProjectsSection />

        {/* Process - How we work timeline */}
        <ProcessSection />

        {/* Clients & Testimonials */}
        <ClientsSection />

        {/* About - Company values and principles */}
        <AboutSection />

        {/* Contact - Get in touch form */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
