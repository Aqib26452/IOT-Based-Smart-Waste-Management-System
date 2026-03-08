import React from "react";
import Navbar from "./Shared/Navbar";
import HeroSection from "./homePage/heroSection";
import Works from "./homePage/works";
import Features from "./homePage/feature";
import ProblemsSolutions from "./homePage/problemSolution";
import Services from "./homePage/service";
import AwarenessCommunity from "./homePage/awarenessCommunity";

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
    </div>
  );
};

export default HomePage;
