import React, { useEffect } from "react";
import Hero from "../../components/home/hero-section/Hero";
import Course from "./../../components/home/course-section";
import AdviseSection from "./../../components/home/advise-section";
import BlogSection from "./../../components/home/blog-section";
import Contact from "../../components/home/contact-section/Contact";
import Information from "../../components/home/information-section/Information";
import FooterSection from "../../components/footer";
import Header from "../../components/UI/Header";

const Home = () => {

  return (
    <>
      <Header absolute={true} />
      <main>
        <Hero />
        <Information />
        <Course />
        <AdviseSection />
        <BlogSection />
        <Contact />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default Home;
