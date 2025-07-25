// SkillsLine.js
import React, { useEffect, useState } from "react";


const skills = [
  { name: "Meta", img: "/assets/images/skill/html.avif" },
  { name: "Google", img: "/assets/images/skill/css.avif" },
  { name: "Microsoft", img: "/assets/images/skill/js.avif" },
  { name: "Slack", img: "/assets/images/skill/bootstrap.avif" },
  { name: "Copilot", img: "/assets/images/skill/tailwind.avif" },
  { name: "Stability AI", img: "/assets/images/skill/react.avif" },
  { name: "Meta", img: "/assets/images/skill/html.avif" },
  { name: "Google", img: "/assets/images/skill/css.avif" },
  { name: "Microsoft", img: "/assets/images/skill/js.avif" },
  { name: "Slack", img: "/assets/images/skill/bootstrap.avif" },
  { name: "Copilot", img: "/assets/images/skill/tailwind.avif" },
  { name: "Stability AI", img: "/assets/images/skill/react.avif" },
  { name: "Copilot", img: "/assets/images/skill/html.avif" },
  { name: "Stability AI", img: "/assets/images/skill/css.avif" },
  { name: "Pixray", img: "/assets/images/skill/js.avif" },
];

const SkillsLine = () => {
  const [isDesktop, setIsDesktop] = useState(false); // Start with false

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsDesktop(window.innerWidth >= 992);

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="container my-5 bg-black">
        <div className="text-center text-white"> <h2 className="text-white mb-3"> OUR EXPERTISE</h2></div>
      <div className="skills-line d-flex align-items-center justify-content-center flex-wrap">
        {skills.map((skill, index) => {
          const isLast = index === skills.length - 1;
          const isEighth = (index + 1) % 8 === 0;

          const shouldShowLine =
            !isDesktop || (isDesktop && !isEighth && !isLast);

          return (
            <React.Fragment key={index}>
              <div className="skill-circle text-center">
                <img src={skill.img} alt={skill.name} />
              </div>
              {shouldShowLine && <div className="dashed-line" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsLine;
