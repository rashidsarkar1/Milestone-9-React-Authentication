import axios from "axios";
import Banar from "./Banar";
import VanuesCard from "./VanuesCard";
import { useEffect, useState } from "react";

function Venues() {
  const [venueData, setVenueData] = useState([]);
  useEffect(() => {
    axios.get("/venues.json").then((data) => setVenueData(data.data));
  }, []);
  // console.log(venueData);

  return (
    <div className="mx-auto max-w-7xl">
      <Banar
        midText="VENUES"
        optionalText="Our Exclusive Wedding"
        image="https://i.ibb.co/0ssSSXX/wedding-venue-img.jpg"
      />
      <div className="grid md:grid-cols-2 ">
        {venueData.map((item) => (
          <VanuesCard venueData={item} key={item.id}></VanuesCard>
        ))}
      </div>
    </div>
  );
}

export default Venues;
