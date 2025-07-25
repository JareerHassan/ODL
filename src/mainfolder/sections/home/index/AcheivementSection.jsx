import React from "react";
import CountUp from "react-countup";

const AchievementsSection = () => {
  const headingStyle = {
    fontSize: "3.5rem",
    fontWeight: "900",
    color: "white",
  };

  const statNumberStyle = {
    fontSize: "2.8rem",
    fontWeight: "900",
    color: "#ff0055",
  };

  const statLabelStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "white",
    marginTop: "10px",
  };

  const containerStyle = {
    backgroundColor: "#000000",
    padding: "60px 30px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <p className="fs-5 fw-bold" style={{ color: "#ff0055" }}>
        From Vision to Virtual.
      </p>

      <h2 className="ourmain-heading">Our Bold Achievements</h2>

      <div className="row mt-5">
        <div className="col-6 col-md-3 mb-4">
          <div style={statNumberStyle}>
            <CountUp end={5000} duration={2} separator="," />+
          </div>
          <div style={statLabelStyle}>Projects Completed</div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div style={statNumberStyle}>
            <CountUp end={40} duration={2} />+
          </div>
          <div style={statLabelStyle}>Global Offices</div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div style={statNumberStyle}>
            <CountUp end={1200} duration={2} separator="," />+
          </div>
          <div style={statLabelStyle}>Happy Clients</div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div style={statNumberStyle}>
            <CountUp end={20} duration={2} />+
          </div>
          <div style={statLabelStyle}>Years of Experience</div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
