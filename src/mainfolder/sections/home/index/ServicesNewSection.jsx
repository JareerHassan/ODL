import React, { useState, useEffect } from "react";

const cardsDataTop = [
  {
    img: "/assets/images/step1.png",
    title: "Consult",
    desc: "We listen, analyze, and advise tailored solutions.",
  },
  {
    img: "/assets/images/step2.png",
    title: "Strategy",
    desc: "Building data-driven strategies that work.",
  },
  {
    img: "/assets/images/step3.png",
    title: "UX/UI Design",
    desc: "Designing intuitive and engaging experiences.",
  },
  {
    img: "/assets/images/step4.png",
    title: "Development",
    desc: "Custom web & mobile development solutions.",
  },
];

const cardsDataBottom = [
  {
    img: "/assets/images/step5.png",
    title: "Quality Assurance",
    desc: "Rigorous testing to ensure flawless delivery.",
  },
  {
    img: "/assets/images/step6.png",
    title: "Deployment",
    desc: "Seamless go-live and setup.",
  },
  {
    img: "/assets/images/step7.png",
    title: "Maintenance",
    desc: "Ongoing support and performance tuning.",
  },
  {
    img: "/assets/images/step8.png",
    title: "Scale & Optimize",
    desc: "Grow your product with confidence.",
  },
];

const ServicesNewSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle = {
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#ff0055",
  };

  const subheadingStyle = {
    fontSize: "1.2rem",
    marginBottom: "40px",
    color: "white",
  };

  const fixedHeight = isMobile ? "auto" : "310px";

  const cardBaseStyle = {
    position: "relative",
    background: "black",
    border: "2px solid #ff0055",
    borderRadius: "12px",
    padding: "20px",
    height: fixedHeight,
    boxSizing: "border-box",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    color: "white",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const overlayStyle = (isHovered) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: isHovered ? "100%" : "0%",
    backgroundColor: "#ff0055",
    transition: "height 0.3s ease",
    zIndex: 0,
  });

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
  };

  const imgStyle = {
    width: "150px",
    height: "150px",
    objectFit: "contain",
    zIndex: 1,
  };

  const textBlockStyle = {
    marginTop: "auto",
    paddingTop: "10px",
    textAlign: "center",
  };

  const titleStyle = (isHovered) => ({
    fontSize: "1.2rem",
    marginBottom: "5px",
    color: isHovered ? "white" : "#ff0055",
  });

  const textStyle = {
    fontSize: "0.95rem",
    color: "white",
  };

  const renderCards = (cards, baseIndex = 0) =>
    cards.map((card, index) => {
      const i = baseIndex + index;
      const isShifted = index === 1 || index === 3;
      const isHovered = hoveredCardIndex === i;

      return (
        <div key={i} className="col-md-3 col-sm-6 mb-4">
          <div
            style={{
              ...cardBaseStyle,
              marginTop: isShifted && !isMobile ? "40px" : "0",
              transform: isHovered ? "translateY(-10px)" : "none",
              boxShadow: isHovered
                ? "0 8px 20px rgba(255, 0, 85, 0.2)"
                : cardBaseStyle.boxShadow,
            }}
            onMouseEnter={() => setHoveredCardIndex(i)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <div style={overlayStyle(isHovered)} />
            <div style={contentStyle}>
              <img src={card.img} alt={card.title} style={imgStyle} />
              <div style={textBlockStyle}>
                <h3 style={titleStyle(isHovered)}>{card.title}</h3>
                <p style={textStyle}>{card.desc}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <section style={sectionStyle}>
      <p className="fs-5 fw-bold" style={{ color: "#ff0055" }}>
        From Vision to Virtual.
      </p>

      <h2 className="ourmain-heading">Our Awesome Services</h2>
      <div className="container">
        <div className="row">{renderCards(cardsDataTop)}</div>
        <div className="row mt-4">{renderCards(cardsDataBottom, 4)}</div>
      </div>
    </section>
  );
};

export default ServicesNewSection;
