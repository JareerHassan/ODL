import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    img: "assets/images/services-1.webp",
    title: "WEB DEVELOPMENT",
    tags: ["UI/UX", "Web Design"],
  },
  {
    img: "assets/images/services-2.webp",
    title: "APP DEVELOPMENT",
    tags: ["App Design", "Softwares"],
  },
  {
    img: "assets/images/services-3.webp",
    title: "DIGITAL MARKETING",
    tags: ["Marketing", "SEO"],
  },
  {
    img: "assets/images/services-4.webp",
    title: "UX/UI DESIGN",
    tags: ["Branding", "Designing"],
  },
  {
    img: "assets/images/services-1.webp",
    title: "WEB DEVELOPMENT",
    tags: ["UI/UX", "Web Design"],
  },
  {
    img: "assets/images/services-2.webp",
    title: "APP DEVELOPMENT",
    tags: ["App Design", "Softwares"],
  },
  {
    img: "assets/images/services-3.webp",
    title: "DIGITAL MARKETING",
    tags: ["Marketing", "SEO"],
  },
  {
    img: "assets/images/services-4.webp",
    title: "UX/UI DESIGN",
    tags: ["Branding", "Designing"],
  },
];

const SectionVideo1 = () => {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    const distance = 350;
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: dir === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="netflix-wrapper">
      <p className="fs-5 fw-bold text-center" style={{ color: "#ff0055" }}>
        From Vision to Virtual.
      </p>

      <h2 className="ourmain-heading">Our Case Studies</h2>

      <button
        className="scroll-btn scroll-left mt-5"
        onClick={() => scroll("left")}
      >
        <FaArrowLeft />
      </button>
      <button
        className="scroll-btn scroll-right mt-5"
        onClick={() => scroll("right")}
      >
        <FaArrowRight />
      </button>

      <div className="carousel-row py-4" ref={rowRef}>
        {slides.map((slide, i) => (
          <Tilt
            key={i}
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1.02}
            className="carousel-card bg-transparent border"
          >
            <img src={slide.img} className="card-img" alt={slide.title} />
            <div className="card-content bg-transparent text-white">
              <div className="card-tags">
                {slide.tags.map((tag, j) => (
                  <span key={j} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-title">{slide.title}</div>
              <p className="card-description">
                We are dedicated to serve you all time.
              </p>
              <a href={slide.link}>
                <button className="learn-btn">Learn More</button>
              </a>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionVideo1;
