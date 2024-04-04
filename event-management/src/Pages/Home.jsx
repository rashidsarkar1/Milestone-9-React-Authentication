import React, { useEffect } from "react";
import Banar from "../Components/Banar";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery";
import Servise from "./Servise";
import TeamMembers from "./TeamMembers/TeamMembers";
import ServiceDetails from "./services/ServicesDetails";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <Banar
        topText={`Country's Best Luxury`}
        midText={`Wedding`}
        endText={`Planners & Event Organizers!`}
        image="https://i.ibb.co/M5cQNbw/weeding-bg.jpg"
      ></Banar>
      <div data-aos="fade-right" className="">
        <Servise></Servise>
      </div>
      <div data-aos="zoom-in">
        <Gallery></Gallery>
      </div>
      <TeamMembers></TeamMembers>
      <Footer></Footer>
    </div>
  );
}

export default Home;
