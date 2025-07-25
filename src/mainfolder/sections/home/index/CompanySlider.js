import React from "react";
import {
  FaPython,
  FaJava,
  FaPhp,
  FaSwift,
  FaRust,
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
} from "react-icons/fa";

// Store icon components with default colors
const iconData = [
  { icon: FaPython, color: "#3776ab", name: "Python" },
  { icon: FaJava, color: "#007396", name: "Java" },
  { icon: FaPhp, color: "#8892be", name: "PHP" },
  { icon: FaSwift, color: "#f05138", name: "Swift" },
  { icon: FaRust, color: "#dea584", name: "Rust" },
  { icon: FaHtml5, color: "#e34c26", name: "HTML5" },
  { icon: FaCss3, color: "#264de4", name: "CSS3" },
  { icon: FaReact, color: "#61dafb", name: "React" },
  { icon: FaAngular, color: "#dd0031", name: "Angular" },
];

const CompanySlider = () => {
  // Repeat the array twice
  const extendedIcons = [...iconData, ...iconData];

  return (
    <div className="bg-black py-5">
      <div className="text-center">
        <p className="fs-5 fw-bold" style={{ color: "#ff0055" }}>
          From Vision to Virtual.
        </p>
        <h2 className="ourmain-heading">Trusted Tech Stack We Work With</h2>
        {/* Row 1 */}
        <div className="overflow-hidden position-relative">
          <div className="d-flex justify-content-start marquee">
            {extendedIcons.map((item, i) => {
              const IconTag = item.icon;
              const isDanger = i % 2 !== 0;

              return (
                <div
                  key={`row1-${i}`}
                  className="rounded-pill border text-white p-3 m-2 px-5 d-flex align-items-center justify-content-center"
                  style={{ minWidth: "80px", height: "60px" }}
                >
                  <IconTag size={40} color={item.color} />
                  <small className="fs-4 ms-2">{item.name}</small>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden position-relative mt-4">
          <div className="d-flex justify-content-start marquee reverse">
            {extendedIcons.map((item, i) => {
              const IconTag = item.icon;
              const isDanger = i % 2 === 0;

              return (
                <div
                  key={`row1-${i}`}
                  className="rounded-pill border text-white p-3 m-2 px-5 d-flex align-items-center justify-content-center"
                  style={{ minWidth: "80px", height: "60px" }}
                >
                  <IconTag size={40} color={item.color} />
                  <small className="fs-4 ms-2">{item.name}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
