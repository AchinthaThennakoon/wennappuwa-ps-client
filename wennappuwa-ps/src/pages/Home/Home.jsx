import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import VisionMission from "../../components/VisionMission/VisionMission";
import Slideshow from "../../components/Slideshow/Slideshow";

const Home = () => {
  return (
    <div>
      <Slideshow/>
      <VisionMission />
      <ContactUs />
    </div>
  );
};

export default Home;
