import { About } from "../components/About";
import { BackToTop } from "../components/BackToTop";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Counts } from "../components/Counts";
import { About_Video } from "../components/About_Video";
import { Clients } from "../components/Clients";
import { Services } from "../components/Services"
import { Cta } from "../components/Cta"
import { Portfolio } from "../components/Portfolio";
import { Team } from "../components/Team";
import { Pricing } from "../components/Pricing";
import { FQA } from "../components/FQA";

import dynamic from "next/dynamic";

import { GetStaticProps } from "next";
import client from "../graphql/client";
import GET_LANDING_PAGE from "../graphql/queries/getLandingPage";
import { LandingPageProps } from "../types/api";

const Testimonials = dynamic(() => {
  return import("../components/Testimonials");
}, { ssr: false });


export default function Home({ logo, hero }: LandingPageProps) {

  return (
    <>
      <Header logo={logo} />
      <Hero hero={hero} />
      <main>
        <About />
        <Counts />
        <About_Video />
        <Clients />
        <Testimonials />
        <Services />
        <Cta />
        <Portfolio />
        <Team />
        <Pricing />
        <FQA /> {/* Frequently Asked Questions */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)
  console.log(landingPage)
  return {
    props: {
      ...landingPage
    }
  }
}

