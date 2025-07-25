import React, { useState } from "react";
import CountUp from "react-countup";

export default function SectionWhyChooseUs1() {
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* Team One Start */}
      <section className="team-one mt-5">
        {/* Background with overlay text */}
        <div
          className="team-one__section"
          style={{
            position: "relative",
            height: "500px",
            overflow: "hidden",
          }}
        >
          <div
            className="team-one__bg"
            style={{
              backgroundImage: "url('/assets/images/background-3.jpg')",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <div className="section-title">
              <h2 className="section-title__title text-light">
                Preparing For Your Success Provide
                <br /> Best IT Solutions.
              </h2>
              <p
                style={{
                  color: "white",
                  opacity: ".7",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Appropriate for your specific business, making it easy for
                <br />
                you to have quality IT services.
              </p>
            </div>

            <div className="cta-one__btn-box" style={{ marginTop: "20px" }}>
              <a
  href="/about"
  className="cta-one__btn thm-btn"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    background: "linear-gradient(to left, #ff0055 , #ff0055)",
    color: "#fff",
    border: "none",
    borderRadius: "40px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    height: "50px",
    width: "200px",
    transition: "background 0.3s ease",
    textDecoration: "none"
  }}
  onMouseOver={(e) => {
    e.target.style.background = "linear-gradient(to left, #ff0055, #ff0055 )";
  }}
  onMouseOut={(e) => {
    e.target.style.background = "linear-gradient(to left, #ff0055 , #ff0055)";
  }}
>
  Let's Start
</a>

            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(51, 126, 254, 0.8), #d558fb), url('/assets/images/background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            position: "relative",
            color: "#fff",
            padding: "60px 20px",
            borderRadius: "20px",
            // Responsive adjustments for margin and width
            margin: "0 20px", // Default margin for smaller screens
            marginTop: "-100px", // Keep the overlap
            width: "auto", // Let it take full width minus margin
          }}
          // Media query for larger screens
          className="container-fluid" // Use container-fluid for full width, or container for fixed width
          // You can also use inline style with media queries if not using a CSS file
          // style={{...someStyles, '@media (min-width: 768px)': { marginLeft: '70px', width: '90%' }}}
        >
          <div className="container text-center">
            <h2 className="fw-bold mb-5 fs-2 text-light">
              We develop strategic software solutions for businesses.
            </h2>

            <div className="row text-center justify-content-center">
              {/* Using Bootstrap's col classes for responsiveness */}
              <div className="col-6 col-md-3 mb-4">
                <h3 className="display-6 fw-bold text-info">
                  <CountUp end={1000} duration={2} />
                </h3>
                <p className="mb-0 fw-semibold">
                  Year of
                  <br />
                  establishment
                </p>
              </div>

              <div className="col-6 col-md-3 mb-4">
                <h3 className="display-6 fw-bold text-info">
                  <CountUp end={1500} duration={2} suffix="+" />
                </h3>
                <p className="mb-0 fw-semibold">
                  Of customers
                  <br />
                  worldwide
                </p>
              </div>

              <div className="col-6 col-md-3 mb-4">
                <h3 className="display-6 fw-bold text-info">
                  <CountUp end={1} duration={2} suffix="+" />
                </h3>
                <p className="mb-0 fw-semibold">
                  Countries with active
                  <br />
                  client base
                </p>
              </div>

              <div className="col-6 col-md-3 mb-4">
                <h3 className="display-6 fw-bold text-info">
                  <CountUp end={4.9} duration={2} decimals={1} suffix="/5" />{" "}
                  {/* Corrected the rating to a more realistic value */}
                </h3>
                <p className="mb-0 fw-semibold">
                  Customer
                  <br />
                  rating
                </p>
              </div>
            </div>

            <p className="mt-5 fs-6">
              You have better things to do than worry about IT for your small
              business.{" "}
              <span
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Let’s Discuss about Project.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Team One End */}
    </>
  );
}