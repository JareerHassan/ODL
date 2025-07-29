import React, { useState } from "react";

const SectionServices1 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandTiles = () => setExpanded(true);

  const services = [
    {
      href: "/services/custom-software",
      img: "assets/images/services-1.webp",
      title: "Custom Software & Business Solutions",
    },
    {
      href: "services/web-development",
      img: "assets/images/services-2.webp",
      title: "Web & Digital Products Development",
    },
    {
      href: "/services/app-development",
      img: "assets/images/services-3.webp",
      title: "Mobile App Development",
    },
    {
      href: "/services/e-commerce-solutions",
      img: "assets/images/services-4.webp",
      title: "E-commerce Web & Mobile Solutions",
    },
    ...(expanded
      ? [
          {
            href: "/services/digital-marketing",
            img: "assets/images/services-5.webp",
            title: "Digital Marketing & SEO Services",
          },
          {
            href: "/services/quality-testing",
            img: "assets/images/services-6.webp",
            title: "Quality Assurance (QA) & Testing",
          },
          {
            href: "/services/digital-consulting",
            img: "assets/images/services-7.webp",
            title: "Digital Transformation & Consulting",
          },
          {
            href: "/services/ai-bots-business-automations",
            img: "assets/images/services-8.webp",
            title: "AI Bots & Business Automations",
          },
        ]
      : []),
  ];

  return (
    <div className="services-section-body bg-black">
      <div className="services-section-title p-0">
        <div className="section-title__tagline-box">

          <span className="fs-5 services-section-tagline bg-black">Our Awesome Services</span>
        </div>
        <h2 className="services-section-heading ms-3">
          We are <span>Dedicated</span> to serve you all time.
        </h2>
      </div>

      <div className="services-section-grid ms-1 gap-4">
        {services.map((card, index) => (
          <div className="services-section-card" key={index}>
            <a href={card.href}>
              <img src={card.img} alt={card.title} />
              <h2>{card.title}</h2>
            </a>
          </div>
        ))}
      </div>

      {!expanded && (
        <button className="services-section-button" onClick={handleExpandTiles}>
          View More Services ↓
        </button>
      )}
    </div>
  );
};

export default SectionServices1;