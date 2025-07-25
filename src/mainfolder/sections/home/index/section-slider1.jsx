"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { register } from "swiper/element/bundle";
import { FaCaretLeft, FaCaretRight, FaCheck } from "react-icons/fa";

function SectionSlider1() {
  const swiperRef = useRef(null);
  const [showContent, setShowContent] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    register(); // now inside useEffect so it runs in browser only
  }, []);

 useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize(); // Initial run
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperEl = swiperRef.current;

      const handleStart = () => setShowContent(false);
      const handleEnd = () => setShowContent(true);

      swiperEl.addEventListener("slidechangetransitionstart", handleStart);
      swiperEl.addEventListener("slidechangetransitionend", handleEnd);

      return () => {
        swiperEl.removeEventListener("slidechangetransitionstart", handleStart);
        swiperEl.removeEventListener("slidechangetransitionend", handleEnd);
      };
    }
  }, []);

  return (
    <div className="sx-bnr-1-wrap-outer home-1-slider position-relative overflow-hidden">
      <swiper-container
        ref={swiperRef}
        loop="true"
        space-between="30"
        effect="fade"
        navigation="true"
        pagination="true"
        autoplay-delay="7000"
        autoplay-disable-on-interaction="true"
        class="swiper-wrapper position-relative "
      >
        {/* Slide 1 */}
        <swiper-slide class="sx-bnr-1-wrap swiper-slide overlay-overlay dark-overlay position-relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-section-video-bg"
          >
            <source src="/assets/videos/video1.mp4" type="video/mp4" />
          </video>

          <div className="sx-bg-overlay opacity-0 sx-bg-primary" />

          <div className="hero-section-overlay">
            {showContent && (
              <div>
                <span
                  className="hero-section-heading responsive-heading"
                  data-swiper-parallax="-300"
                >
                  We are IT service agency
                </span>

                <h2 className="sx-bnr-1-large-title display-4 mt-md-4 hero-section-subtitle">
                  Digital solutions & mobile apps- built to solve real business
                  problems, automate workflows, and drive growth.
                </h2>

                <div className="hero-section-info">
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  Android & iOS App Development <br />
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  Enterprise & Productivity Apps <br />
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  Custom Web & SaaS Solutions
                </div>

                <div className="sx-bnr-readmore mt-3">
                  <Link
                    href="/about-us"
                    className="site-button sx-btn-primary icon d-flex align-items-center justify-content-center text-white border-0 fw-semibold text-decoration-none hero-section-button"
                    style={{
                      fontSize: isMobile ? "12px" : "16px",
                      height: isMobile ? "50px" : "45px",
                    }}
                  >
                    <i className="fa fa-long-arrow-right me-2" />
                    Get a Free Consultation
                  </Link>
                </div>
              </div>
            )}
          </div>
        </swiper-slide>

        {/* Slide 2 */}
        <swiper-slide class="sx-bnr-1-wrap swiper-slide overlay-overlay dark-overlay position-relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-section-video-bg"
          >
            <source src="/assets/videos/video2.mp4" type="video/mp4" />
          </video>

          <div className="sx-bg-overlay opacity-0 sx-bg-primary" />

          <div className="hero-section-overlay">
            {showContent && (
              <div>
                <span
                  className="hero-section-heading responsive-heading"
                  data-swiper-parallax="-300"
                >
                  Your App, Next Big Success!
                </span>

                <h2 className="sx-bnr-1-large-title display-4 mt-md-4 hero-section-subtitle">
                  Our apps are making a real impact—helping businesses & users
                  worldwide with innovative, high-performance digital solutions.
                </h2>

                <div className="hero-section-info">
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  Featured on Top App Stores <br />
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  1M+ Active Users <br />
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  8+ Years of Digital Excellence
                </div>

                <div className="sx-bnr-readmore mt-3">
                  <Link
                    href="/about-us"
                    className="site-button sx-btn-primary icon d-flex align-items-center justify-content-center text-white border-0 fw-semibold text-decoration-none hero-section-button"
                    style={{
                      fontSize: isMobile ? "12px" : "16px",
                      height: isMobile ? "50px" : "45px",
                    }}
                  >
                    <i className="fa fa-long-arrow-right me-2" />
                    Build Your Winning App
                  </Link>
                </div>
              </div>
            )}
          </div>
        </swiper-slide>

        {/* Slide 3 */}
        <swiper-slide class="sx-bnr-1-wrap swiper-slide overlay-overlay dark-overlay position-relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-section-video-bg"
          >
            <source src="/assets/videos/video3.mp4" type="video/mp4" />
          </video>

          <div className="sx-bg-overlay opacity-0 sx-bg-primary" />

          <div className="hero-section-overlay">
            {showContent && (
              <div>
                <span
                  className="hero-section-heading responsive-heading"
                  data-swiper-parallax="-300"
                >
                  We are IT service agency
                </span>

                <h2 className="sx-bnr-1-large-title display-4 mt-md-4 hero-section-subtitle">
                  We develop custom automation solutions that eliminate
                  complexity, reduce costs, and improve business efficiency.
                </h2>

                <div className="hero-section-info">
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  Business Process Automation <br />
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  Microsoft Dynamics CRM & ERP <br />
                  <span className="text-white me-2">
                    <FaCheck />
                  </span>{" "}
                  AI & Workflow Optimization
                </div>

                <div className="sx-bnr-readmore mt-3">
                  <Link
                    href="/about-us"
                    className="site-button sx-btn-primary icon d-flex align-items-center justify-content-center text-white border-0 fw-semibold text-decoration-none hero-section-button"
                    style={{
                      fontSize: isMobile ? "12px" : "16px",
                      height: isMobile ? "50px" : "45px",
                    }}
                  >
                    <i className="fa fa-long-arrow-right me-2" />
                    Start Automating Now
                  </Link>
                </div>
              </div>
            )}
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default SectionSlider1;
