import React, { useState } from "react";

const SectionServices1 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandTiles = () => {
    setExpanded(true);
  };

  return (
    <>
      <style>{`
        body.sigma-body {
          margin: 0 20px;
        }

        .zeta-grid-custom {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0 20px;
          box-sizing: border-box;
          margin-bottom: 40px;

        }

        .omega-card-custom {
          position: relative;
          width: 280px;
          height: 300px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .omega-card-custom:hover {
          transform: scale(1.05);
        }

        .omega-card-custom img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(60%);
        }

        .omega-card-custom h2 {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          color: white;
          font-size: 22px;
          font-weight: bold;
        }

        .gamma-trigger-custom {
          margin-top: 40px;
          text-align: center;
        }

        // .gamma-trigger-custom button {
        //   padding: 5px 30px;
        //   background-color: #337efe;
        //   color: white;
        //   border: 1px solid #d558fb;
        //   border-radius: 40px;
        //   font-size: 18px;
        //   cursor: pointer;
        //   transition: all 0.3s ease;
        //   height: 60px;
        //   margin-bottom: 10px;
        // }

        // .gamma-trigger-custom button:hover {
        //   background-color: #d558fb;
        //   color:  #ffffff;
        // }
        @media (max-width: 767px) {
    .omega-card-custom {
      width: 90vw;
      height: 380px;
    }
  }
      `}</style>

      <div className="section-title text-center">
        <div className="section-title__tagline-box" style={{marginBottom: "10px"}} >
          <div className="section-title__tagline-shape">
            <img
              src="assets/images/shapes/section-title-tagline-shape.png"
              alt=""
            />
          </div>
          <span
            className="section-title__tagline"
            style={{
              fontSize: "20px",
              fontWeight: "500",
              backgroundColor: "white",
              color: "#7114ef", // A nice purple text color to match your theme
              padding: "8px 20px",
              borderRadius: "30px",
              boxShadow: "4px 4px 4px rgba(0.2, 0.2, 0.2, 0.2)",
              display: "inline-block",
              letterSpacing: "1.2px",
              userSelect: "none",
            }}
          >
            Our Awesome Services
          </span>
        </div>
        <h2
          className="section-title__title mb-4"
          style={{ fontSize: "35px", fontWeight: "900" }}
        >
          We are <span style={{ color: "#7114ef" }}>Dedicated</span> to <br />
          serve you all time.
        </h2>
      </div>

      <div className="sigma-body " style={{ marginTop: "60px", justifyContent:''}}>
        <div className="zeta-grid-custom">
          <div className="omega-card-custom">
            <a href="/service/custom-software">
              <img
                src="assets/images/services-1.webp"
                alt="Custom Software & Business Solutions"
              />
              <h2>Custom Software & Business Solutions</h2>
            </a>
          </div>
          <div className="omega-card-custom">
            <a href="service/web-development">
              <img src="assets/images/services-2.webp" alt="Dynamics 365" />
              <h2>Web & Digital Products Development</h2>
            </a>
          </div>
          <div className="omega-card-custom">
            <a href="/service/app-development">
              <img
                src="assets/images/services-3.webp"
                alt="Mobile App Development"
              />
              <h2>Mobile App Development</h2>
            </a>
          </div>
          <div className="omega-card-custom">
            <a href="/service/e-commerce-solutions">
              <img
                src="assets/images/services-4.webp"
                alt="Staff Augmentation"
              />
              <h2>E-commerce Web & Mobile Solutions</h2>
            </a>
          </div>

          {/* Conditionally render hidden cards */}
          {expanded && (
            <>
              <div className="omega-card-custom">
                <a href="/service/digital-marketing">
                  <img
                    src="assets/images/services-5.webp"
                    alt="Cloud Services"
                  />
                  <h2>Digital Marketing & SEO Services</h2>
                </a>
              </div>
              <div className="omega-card-custom">
                <a href="/service/quality-testing">
                  <img src="assets/images/services-6.webp" alt="UI/UX Design" />
                  <h2>Quality Assurance (QA) & Testing</h2>
                </a>
              </div>
              <div className="omega-card-custom">
                <a href="/service/digital-consulting">
                  <img
                    src="assets/images/services-7.webp"
                    alt="Web Development"
                  />
                  <h2>Digital Transformation & Consulting</h2>
                </a>
              </div>
              <div className="omega-card-custom">
                <a href="/service/ai-bots-business-automations">
                  <img
                    src="assets/images/services-8.webp"
                    alt="IT Consulting"
                  />
                  <h2>AI Bots & Business Automations</h2>
                </a>
              </div>
            </>
          )}
        </div>

        {!expanded && (
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
              background:
                "linear-gradient(to left, rgb(144, 18, 255), rgba(8, 95, 246, 0.8))",
              color: "#fff",
              border: "none",
              borderRadius: "40px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              height: "50px",
              width: "200px",
              margin: "0 auto" /* This is the key change */,
              transition: "background 0.3s ease",
              marginBottom: "10px",
            }}
            onClick={handleExpandTiles}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(to left, rgb(8, 95, 246), rgb(144, 18, 255))")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(to left, rgb(144, 18, 255), rgba(8, 95, 246, 0.8))")
            }
          >
            View More Services ↓
          </button>
        )}
      </div>
    </>
  );
};

export default SectionServices1;
