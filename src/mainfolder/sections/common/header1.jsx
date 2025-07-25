"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import Megamenu from "./Mega-Menu";
import { FaChevronDown, FaBars } from "react-icons/fa";
import MobileNav from "./MobileMenu";
const NavLink = Link;

function Header1() {
  const [isActive, setIsActive] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMegaMenu = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  const toggleNavClass = () => setIsActive(!isActive);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 868;

  useEffect(() => {
    loadScript("js/mobilenav.js");
  }, []);

  const handleMenuClick = (e) => {
    if (isMobile && (e.target.tagName === "A" || e.target.closest("a"))) {
      setIsActive(false);
    }
  };

  return (
    <>
      {isMobile && <MobileNav />}
      <header
        className={`header-style1 d-lg-block d-none site-header mobile-sider-drawer-menu ${
          isActive ? "active" : ""
        }`}
      >
        {/* Main Header */}
        <div
          className=" main-bar-wraper navbar-expand-lg"
          style={{ backgroundColor: "black", background: "black !important" }}
        >
          <div className="main-bar">
            <div className="container clearfix">
              {/* Logo */}
              <div className="logo-header d-none d-md-block">
                <div className="logo-header-inner logo-header-one">
                  <Link
                    className="text-white text-decoration-none"
                    href="/index"
                  >
                    <Image
                      src="/assets/images/main-logo.webp"
                      width={100}
                      height={60}
                    />{" "}
                  </Link>
                </div>
              </div>

              {/*toggle Button */}
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                className="navbar-toggler collapsed"
                onClick={toggleNavClass}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  color: "#fff", // change color as needed
                  cursor: "pointer",
                }}
              >
                <span className="sr-only"></span>
                <FaBars />
              </button>

              {/* Quote Button */}
              <div className="extra-nav hide-on-mobile">
                <div className="sx-bnr-readmore   ">
                  <Link
                    href="/about-us"
                    className="text-white  site-button sx-btn-primary icon"
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
                      fontWeight: 600,
                      marginTop: "10px",
                      fontFamily: "var(--title-family)",
                      width: "200px",
                      height: "50px",
                      transition: "background 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background =
                        "linear-gradient(to left, #ff0055, #ff0055 )";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background =
                        "linear-gradient(to left, #ff0055 , #ff0055)";
                    }}
                  >
                    Get a Quote Now
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div
                className={`header-nav navbar-collapse   d-flex justify-content-center ${
                  isActive ? "show" : "collapse"
                }`}
              >
                <ul className="nav navbar-nav" onClick={handleMenuClick}>
                  <li className="active">
                    <Link
                      className="text-white fs-6 text-decoration-none"
                      href="/"
                    >
                      Home <FaChevronDown />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-decoration-none fs-6"
                      href="/about-us"
                    >
                      About Us <FaChevronDown />
                    </Link>

                    {/* <ul className="sub-menu" >
                      <li style={{ marginTop: "-50px" }}>
                        <Link
                          className="text-white text-decoration-none fs-6"
                         href="/faq"
                        >
                          Faq Page
                        </Link>
                      </li>
                      <li style={{ marginTop: "-16px" }}>
                        <Link
                          className="text-white text-decoration-none fs-6"
                         href="/gallery"
                        >
                          Gallery
                        </Link>
                      </li>
                      <li style={{ marginTop: "-15px" }}>
                        <Link
                          className="text-white text-decoration-none fs-6"
                         href="/testimonials"
                        >
                          Testimonials
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <a
                      className="text-white text-decoration-none fs-6"
                      href="/services"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMegaMenu();
                      }}
                    >
                      Services <FaChevronDown />
                    </a>
                    {/* <ul className="sub-menu">
                      <li>
                        <Link
                          className="text-white text-decoration-none"
                          href="/services/custom-software/#custom-software-development"
                        >
                          Custom Software Solutions
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/custom-software"
                            >
                              Custom Software Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/custom-software"
                            >
                              Business Process Automation
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/custom-software"
                            >
                              Automating Business Processes through Mobile Apps
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/custom-software"
                            >
                              Microsoft Dynamics 365 CRM
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          className="text-white text-decoration-none fs-6"
                          href="/services/custom-software/#custom-software-development"
                        >
                          Mobile App Development
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/app-development"
                            >
                              Native Mobile Apps
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/app-development"
                            >
                              Android App Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/app-development"
                            >
                              Cross-Platform & Hybrid Apps
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/app-development"
                            >
                              Flutter App Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/app-development"
                            >
                              React Native App Development
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          className="text-white text-decoration-none fs-6"
                          href="/services/custom-software/#custom-software-development"
                        >
                          Web-Development
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/web-development"
                            >
                              Custom Website Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/web-development"
                            >
                              Business & Corporate Websites
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/web-development"
                            >
                              Custom Web Applications
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          className="text-white text-decoration-none fs-6"
                          href="/services/custom-software/#custom-software-development"
                        >
                          E-commerce Solutions
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/e-commerce-solutions"
                            >
                              E-commerce Website Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/e-commerce-solutions"
                            >
                              Shopify Store Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/e-commerce-solutions"
                            >
                              WooCommerce Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/e-commerce-solutions"
                            >
                              Custom E-commerce Platforms
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          className="text-white text-decoration-none fs-6"
                          href="/services/custom-software/#custom-software-development"
                        >
                          Digital Marketing Services
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/digital-marketing"
                            >
                              SEO & Performance Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/digital-marketing"
                            >
                              Social Media Marketing & Branding
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/digital-marketing"
                            >
                              Conversion Optimization & Lead Generation
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          className="text-white text-decoration-none fs-6"
                          href="/services/custom-software/#custom-software-development"
                        >
                          Quality Assurance & Testing
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/quality-testing"
                            >
                              Manual & Automated Testing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/quality-testing"
                            >
                              Performance & Security Testing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/quality-testing"
                            >
                              Mobile & Web App Testing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/quality-testing"
                            >
                              Bug Tracking & Fixing
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          className="text-white text-decoration-none fs-6"
                          href="/services/custom-software/#custom-software-development"
                        >
                          Digital Transformation
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/digital-consulting"
                            >
                              Legacy System Modernization
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/digital-consulting"
                            >
                              Cloud & AI Integration
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/digital-consulting"
                            >
                              Process Optimization & Automation
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-white text-decoration-none fs-6"
                              href="/services/digital-consulting"
                            >
                              Technology Strategy Consulting
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul> */}

                    {/* Desktop Mega Menu */}
                    {!isMobile && showMegaMenu && (
                      <div
                        className="position-absolute"
                        style={{
                          top: "100%",
                          left: 0,
                          width: "800px",
                          zIndex: 9999,
                          backgroundColor: "white",
                        }}
                      >
                        <Megamenu />
                      </div>
                    )}
                  </li>

                  <li>
                    <Link
                      className="text-white text-decoration-none fs-6"
                      href="/portfolio"
                    >
                      Portfolio <FaChevronDown />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-decoration-none fs-6"
                      href="/team"
                    >
                      Team <FaChevronDown />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-decoration-none fs-6"
                      href="/contact-us"
                    >
                      Contact Us <FaChevronDown />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header1;
