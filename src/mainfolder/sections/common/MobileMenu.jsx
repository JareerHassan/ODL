"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaAngleUp, FaAngleDown } from "react-icons/fa";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [pathname]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (key) => {
    setOpenSubDropdown((prev) => (prev === key ? null : key));
  };

  const renderIcon = (isOpen) =>
    isOpen ? (
      <FaAngleUp style={{ color: "#fff" }} />
    ) : (
      <FaAngleDown style={{ color: "#fff" }} />
    );

  const serviceSections = [
    {
      key: "custom",
      label: "Custom Software Solutions",
      to: "/services/custom-software/#custom-software-development",
      links: [
        "Custom Software Development",
        "Business Process Automation",
        "Automating Business Processes through Mobile Apps",
        "Microsoft Dynamics 365 CRM",
      ],
      path: "/services/custom-software",
    },
    {
      key: "mobile",
      label: "Mobile App Development",
      to: "/services/app-development/#native-mobile-apps",
      links: [
        "Native Mobile Apps",
        "Android App Development",
        "Cross-Platform & Hybrid Apps",
        "Flutter App Development",
        "React Native App Development",
      ],
      path: "/services/app-development",
    },
    {
      key: "web",
      label: "Web Development",
      to: "/services/web-development/#custom-website-development",
      links: [
        "Custom Website Development",
        "Business & Corporate Websites",
        "Custom Web Applications",
      ],
      path: "/services/web-development",
    },
    {
      key: "ecom",
      label: "E-commerce Solutions",
      to: "/services/e-commerce-solutions/#ecommerce-website-development",
      links: [
        "E-commerce Website Development",
        "Shopify Store Development",
        "WooCommerce Development",
        "Custom E-commerce Platforms",
      ],
      path: "/services/e-commerce-solutions",
    },
    {
      key: "marketing",
      label: "Digital Marketing Services",
      to: "/services/digital-marketing/#seo-performance-marketing",
      links: [
        "SEO & Performance Marketing",
        "Social Media Marketing & Branding",
        "Conversion Optimization & Lead Generation",
      ],
      path: "/services/digital-marketing",
    },
    {
      key: "qa",
      label: "Quality Assurance & Testing",
      to: "/services/quality-testing/#manual-automated-testing",
      links: [
        "Manual & Automated Testing",
        "Performance & Security Testing",
        "Mobile & Web App Testing",
        "Bug Tracking & Fixing",
      ],
      path: "/services/quality-testing",
    },
    {
      key: "transform",
      label: "Digital Transformation",
      to: "/services/digital-consulting/#legacy-modernization",
      links: [
        "Legacy System Modernization",
        "Cloud & AI Integration",
        "Process Optimization & Automation",
        "Technology Strategy Consulting",
      ],
      path: "/services/digital-consulting",
    },
  ];

  return (
    <>
      {/* Mobile header */}
      <div
        className=" d-lg-none"
        style={{
          background: "#000",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <img
            src="/assets/images/logmobile.png"
            alt="Logo"
            width="100"
            style={{ marginTop: "1rem" }}
          />
        </Link>
        <div
          style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Sidebar */}
      <div
        style={{
          background: "#1a1a1a",
          color: "#fff",
          padding: "16px",
          display: menuOpen ? "block" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {/* Home */}
          <li style={{ padding: "10px 0" }}>
            <Link
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Home
            </Link>
          </li>

          {/* About Us */}
          <li>
            <div
              onClick={() => toggleDropdown("about")}
              style={{
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                fontSize: "16px",
              }}
            >
              <Link
                href="/about-us"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About Us
              </Link>
              {/* renderIcon(openDropdown === "about") */}
            </div>
          </li>

          {/* Services */}
          <li>
            <div
              onClick={() => toggleDropdown("services")}
              style={{
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                fontSize: "16px",
              }}
            >
              <span>Services</span>
              {renderIcon(openDropdown === "services")}
            </div>

            {/* Services dropdown */}
            {openDropdown === "services" && (
              <ul style={{ paddingLeft: "16px" }}>
                {serviceSections.map((section) => (
                  <li key={section.key}>
                    <div
                      onClick={() => toggleSubDropdown(section.key)}
                      style={{
                        cursor: "pointer",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "8px 0",
                        fontSize: "15px",
                      }}
                    >
                      <span>{section.label}</span>
                      {renderIcon(openSubDropdown === section.key)}
                    </div>

                    {/* Sub-links */}
                    {openSubDropdown === section.key && (
                      <ul style={{ paddingLeft: "16px" }}>
                        {section.links.map((link, idx) => (
                          <li key={idx} style={{ padding: "4px 0" }}>
                            <Link
                              href={section.path}
                              style={{
                                color: "#ccc",
                                textDecoration: "none",
                                fontSize: "14px",
                              }}
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Portfolio */}
          <li style={{ padding: "10px 0" }}>
            <Link
              href="/portfolio"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Portfolio
            </Link>
          </li>

          {/* Other Links */}
          <li style={{ padding: "10px 0" }}>
            <Link
              href="/team"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Team
            </Link>
          </li>
          <li style={{ padding: "10px 0" }}>
            <Link
              href="/blogs"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Blogs
            </Link>
          </li>
          <li style={{ padding: "10px 0" }}>
            <Link
              href="/contact-us"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
