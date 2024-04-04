import React from "react";
import "./team.css"; // Import the external CSS file

function TeamImage({ weadingTeam }) {
  const { name, role, image } = weadingTeam;
  return (
    <div className="mt-6 wpo-team-item">
      <div className="wpo-team-img">
        <img src={image} alt="" />
      </div>
      <div className="wpo-team-text">
        <h3>
          <a>{name}</a>
        </h3>
        <span>{role}</span>
      </div>
    </div>
  );
}

export default TeamImage;
