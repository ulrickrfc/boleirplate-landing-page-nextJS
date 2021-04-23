import { About } from "../components/About";
import { BackToTop } from "../components/BackToTop";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Counts } from "../components/Counts";
import { About_Video } from "../components/About_Video";
import { Clients } from "../components/Clients";
import { Testimonials } from "../components/Testimonials"; //bug
import { Services } from "../components/Services"
import { Cta } from "../components/Cta"
import { Portfolio } from "../components/Portfolio";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <Counts />
        <About_Video/>
        <Clients />
        {/* Testimonials */}
        <Services />
        <Cta />
        <Portfolio />
        {/* 
        Team
        Pricing
        Frequently Asked Questions */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}