import React, { useState, useEffect } from 'react';
import { FaPencilRuler, FaProjectDiagram, FaCogs, FaUsers, FaSearch } from 'react-icons/fa';

const SectionAboutCompany1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576); // Bootstrap sm breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    { title: 'Web & Mobile Apps, SAAS', icon: <FaPencilRuler size={50} /> },
    { title: 'Digital Transformation', icon: <FaProjectDiagram size={50} /> },
    { title: 'Dynamics 365 CRM, ERP', icon: <FaCogs size={50} /> },
    { title: 'Ecommerce & Online Businesses', icon: <FaUsers size={50} /> },
    { title: 'Digital Marketing & SEO', icon: <FaSearch size={50} /> },
  ];

  const hoverStyle = {
    backgroundImage: `linear-gradient(to left,  #ff0055,  #ff0055), url('/assets/images/bg-color.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    border: 'none',
    gap: "10px",
    cursor: 'pointer',
  };

  const defaultStyle = {
    background: '#000000',
    color: ' #ff0055',
    border: '1px solid #eee',
    cursor: 'pointer',
    gap:"10px",
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="mb-4"
            style={{
              width: isMobile ? '100%' : '230px',
            }}
          >
            <div
              className="text-center p-5 shadow-sm h-75"
              style={{
                ...(hoveredIndex === index ? hoverStyle : defaultStyle),
                transition: 'all 0.3s ease',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>{service.icon}</div>
              <h6
                style={{
                  marginTop: '20px',
                  fontWeight: '900',
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: hoveredIndex === index ? '#fff' : '#ffffff',
                }}
              >
                {service.title}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionAboutCompany1;
