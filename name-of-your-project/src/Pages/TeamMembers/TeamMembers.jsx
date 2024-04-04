import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import TeamImage from "./TeamImage/TeamImage";
import axios from "axios";

function TeamMembers() {
  const [weadingTeam, setWeadingTeam] = useState([]);
  useEffect(() => {
    axios
      .get("/weddingTeam.json")
      .then((data) => setWeadingTeam(data.data.weddingTeam));
  }, []);
  // console.log(weadingTeam);
  return (
    <div>
      <SectionTitle title="Our Team Members"></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {weadingTeam.map((persion) => (
          <TeamImage key={persion.id} weadingTeam={persion} />
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
