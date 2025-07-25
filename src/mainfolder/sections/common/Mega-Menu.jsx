'use client'
import React, { useState } from 'react';

const Megamenu = () => {
  const [activeService, setActiveService] = useState('custom-software');

  const services = {
    'custom-software': [
      { name: "Custom Software Development", link: "/services/custom-software" },
      { name: "Business Process Automation", link: "/services/custom-software" },
      { name: "Mobile App Automation", link: "/services/custom-software" },
      { name: "Microsoft Dynamics 365 CRM", link: "/services/custom-software" }
    ],
    'app-development': [
      { name: "Native Mobile Apps", link: "/services/app-development" },
      { name: "Android Development", link: "/services/app-development" },
      { name: "Flutter & React Native", link: "/services/app-development" },
      { name: "Hybrid Apps", link: "/services/app-development" }
    ],
    'web-development': [
      { name: "Custom Websites", link: "/services/web-development" },
      { name: "Corporate Sites", link: "/services/web-development" },
      { name: "Web Applications", link: "/services/web-development" }
    ],
    'e-commerce-solutions': [
      { name: "E-commerce Platforms", link: "/services/e-commerce-solutions" },
      { name: "Shopify Solutions", link: "/services/e-commerce-solutions" },
      { name: "WooCommerce Setup", link: "/services/e-commerce-solutions" },
      { name: "Custom E-commerce", link: "/services/e-commerce-solutions" }
    ],
    'digital-marketing': [
      { name: "SEO Servicess", link: "/services/digital-marketing" },
      { name: "Social Media Marketing", link: "/services/digital-marketing" },
      { name: "Lead Generation", link: "/services/digital-marketing" }
    ],
    'quality-testing': [
      { name: "Manual & Automated Testing", link: "/services/quality-testing" },
      { name: "Performance & Security", link: "/services/quality-testing" },
      { name: "App QA", link: "/services/quality-testing" },
      { name: "Bug Fixing", link: "/services/quality-testing" }
    ],
    'digital-consulting': [
      { name: "System Modernization", link: "/services/digital-consulting" },
      { name: "Cloud/AI Integration", link: "/services/digital-consulting" },
      { name: "Process Automation", link: "/services/digital-consulting" },
      { name: "Strategy Consulting", link: "/services/digital-consulting" }
    ]
  };

  const serviceTitles = {
    'custom-software': 'Custom Software',
    'app-development': 'App Development',
    'web-development': 'Web Development',
    'e-commerce-solutions': 'E-commerce Solutions',
    'digital-marketing': 'Digital Marketing',
    'quality-testing': 'QA & Testing',
    'digital-consulting': 'Consulting Services'
  };

  return (
    <div className="megamenu-wrapper border-bottom d-flex position-fixed top-5 start-0">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="d-flex flex-column">
          {Object.entries(serviceTitles).map(([key, title]) => (
            <button
              key={key}
              onMouseEnter={() => setActiveService(key)}
              className={`text-start w-100 px-4 py-3 fw-semibold border-0 ${
                activeService === key ? 'bg-custom text-white' : 'bg-transparent text-white'
              }`}
              style={{
                fontSize: '15px',
                borderLeft: activeService === key ? '4px solid #fff' : '4px solid transparent',
                transition: 'all 0.2s ease'
              }}
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      {/* Detail Section */}
      <div className="detail p-5 text-white">
        <h3 className="text-custom fw-bold mb-4">{serviceTitles[activeService]}</h3>
        <div className="row">
          {services[activeService]?.map((item, idx) => (
            <div key={idx} className="col-md-6 mb-4">
              <a
                href={item.link}
                className="d-block p-4 rounded border border-danger text-white text-decoration-none h-100 hover-card"
                style={{ fontSize: '15px', fontWeight: '500', backgroundColor: 'transparent' }}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
          padding: 0;
        }

        .megamenu-wrapper {
          width: 100vw;
          height: 400px;
          background: #111;
          overflow: hidden;
          z-index: 9999;
        }

        .sidebar {
          width: 30%;
          background-color: #000;
          min-height: 100vh;
        }

        .detail {
          width: 70%;
          background-color: rgba(0,0,0,0.9);
          min-height: 300px;
        }

        .hover-card {
          transition: all 0.3s ease;
        }

        .hover-card:hover {
          background-color: #dc3545 !important;
          color: #fff !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(220, 53, 69, 0.3);
        }

        @media (max-width: 768px) {
          .megamenu-wrapper {
            flex-direction: column;
          }

          .sidebar,
          .detail {
            width: 100% !important;
            min-height: 300px;
          }

          .hover-card {
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Megamenu;
