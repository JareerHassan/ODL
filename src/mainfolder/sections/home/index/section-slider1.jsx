"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { FaCheck } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";



export default function SectionSlider1() {
  const [showContent, setShowContent] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sx-bnr-1-wrap-outer home-1-slider position-relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        onSlideChangeTransitionStart={() => setShowContent(false)}
        onSlideChangeTransitionEnd={() => setShowContent(true)}
        className="position-relative"
      >
        {/* Slide 1 */}
        <SwiperSlide className="sx-bnr-1-wrap overlay-overlay dark-overlay position-relative">
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
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="sx-bnr-1-wrap overlay-overlay dark-overlay position-relative">
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
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="sx-bnr-1-wrap overlay-overlay dark-overlay position-relative">
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
