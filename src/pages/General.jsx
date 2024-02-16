import React from "react";
import Header from "../components/Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import QuoteWithPhoto from "../components/QuoteWithPhoto/QuoteWithPhoto";
import Plan from "./Plan/Plan";
import VideoMaterial from "./VideoMaterial/VideoMaterial";
import FeelingWords from "../components/FeelingWords/FeelingWords";
import BestYogaPlan from "../components/BestYogaPlan/BestYogaPlan";
import Contacts from "./Contacts/Contacts";
import Footer from "../components/Footer/Footer";

const General = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <QuoteWithPhoto />
      <Plan />
      <VideoMaterial />
      <FeelingWords />
      <BestYogaPlan />
      <Contacts />
      <Footer />
    </div>
  );
};

export default General;
