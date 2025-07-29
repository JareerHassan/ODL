"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUsSection = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Column */}
          <div className="col-lg-6 col-md-12 mb-4">
            <p className="about-blue-text fw-bold">About us</p>
            <h1 className="about-heading">
              Choose <span className="about-blue-text">The Best</span> IT Service Company
            </h1>
            <p className="about-paragraph">
              ITSoft has been optimized to give your visitors the best experience in terms of UX/UI, with a unique design.
            </p>

            <div className="about-tab-nav mb-3">
              <span className="active">Our Mission</span>
              <span>Our Vision</span>
              <span>Our Value</span>
            </div>

            <p className="about-paragraph">
              An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes;
              that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling
              apart. We’ve raised the standards in this industry and are a leading cybersecurity.
            </p>

            <button className="about-button mt-3">
              Check details about our company <span className="about-play">&#9654;</span>
            </button>
          </div>

          {/* Right Column */}
          <div className="col-lg-5 col-md-12 position-relative text-center">
            <div className="about-circle"></div>
            <div className="about-experience">
              <h2>12</h2>
              <p>years of experiences</p>
            </div>
            <Image
              src="/assets/images/services-4.webp"
              alt="Professional Woman"
              width={500}
              height={450}
              className="about-image"
            />
            <div className="about-badge mt-3">
              <div className="d-flex align-items-center">
                <div className="badge-icon">⭐</div>
                <div>
                  <h4 className="mb-1">Best Awarded Company</h4>
                  <p className="mb-0">
                    We adapt our delivery to the way you work, whether as an external provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
