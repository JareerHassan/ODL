import React from "react";

const industries = [
  {
    href: "/industries",
    imgSrc: "assets/images/travel.svg",
    label: "Retail & Ecommerce",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/Public.svg",
    label: "Real Estate & Construction",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/telecommunication.svg",
    label: "Education & Training",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/Retail.svg",
    label: "Professional & Legal Services",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/oil.svg",
    label: "Travel,  & Transportation",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/startup.svg",
    label: "Events, Media & Entertainment",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/e-commerce.svg",
    label: "Technology & IT Services",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/Banking.svg",
    label: "Finance &  Businesses",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/oil.svg",
    label: "Healthcare & Wellness",
  },
  {
    href: "/industries",
    imgSrc: "assets/images/Gaming.svg",
    label: "Food & Beverage",
  },
];

export function SectionPricing1Inner() {
  return (
    <div className="industries-section-wrapper text-center">
      <p className="fs-5 fw-bold" style={{ color: "#ff0055" }}>
        From Vision to Virtual.
      </p>

      <h2 className="ourmain-heading">Discover our Impact Across Industries</h2>
      <div className="d-flex justify-content-center">
        <div className="row container ">
          <div className="col-md-6">
            {industries.slice(0, 5).map(({ href, imgSrc, label }, i) => (
              <a
                href={href}
                key={i}
                className="industries-section-item border-bottom mb-2"
              >
                <div className="industries-section-icon ">
                  <img
                    src={imgSrc}
                    alt={label}
                    className="industries-section-img"
                  />
                </div>
                {label}
              </a>
            ))}
          </div>
          <div className="col-md-6">
            {industries.slice(5).map(({ href, imgSrc, label }, i) => (
              <a
                href={href}
                key={i + 5}
                className="industries-section-item border-bottom mb-2"
              >
                <div className="industries-section-icon">
                  <img
                    src={imgSrc}
                    alt={label}
                    className="industries-section-img"
                  />
                </div>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <a href="/contact-us" className="text-decoration-none">
        <button className="industries-section-button mt-4">
          Let's Talk Business
        </button>
      </a>
    </div>
  );
}

function SectionPricing1() {
  return (
    <div
      className="section-full sx-p-table-outer wow fadeInDown"
      data-wow-duration="1000ms"
    >
      <SectionPricing1Inner />
    </div>
  );
}

export default SectionPricing1;
