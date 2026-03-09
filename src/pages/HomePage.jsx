import React from "react";
import Navbar from "./Shared/Navbar";
import HeroSection from "./homePage/heroSection";
import Works from "./homePage/works";
import Features from "./homePage/feature";
import ProblemsSolutions from "./homePage/problemSolution";
import Services from "./homePage/service";
import AwarenessCommunity from "./homePage/awarenessCommunity";
import Contact from "./homePage/contact";
import Footer from "./Shared/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Works />
      <Features />
      <ProblemsSolutions />
      <Services />
      <AwarenessCommunity />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
