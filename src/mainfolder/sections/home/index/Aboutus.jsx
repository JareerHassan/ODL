import React from 'react';

const AboutUsSection = () => {
  const containerStyle = {
    backgroundColor: '#000000',
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const leftCol = {
    flex: '1 1 50%',
    paddingRight: '20px',
    minWidth: '300px',
  };

  const rightCol = {
    flex: '1 1 45%',
    position: 'relative',
    textAlign: 'center',
    minWidth: '300px',
  };

  const heading = {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '10px 0',
    color:'#ffffff'
  };

  const blueText = {
    color: '#ff0055',
  };

  const paragraph = {
    color: '#ffffff',
    margin: '10px 0',
    lineHeight: '1.6',
  };

  const tabNav = {
    display: 'flex',
    gap: '20px',
    borderBottom: '2px solid #eaeaea',
    marginTop: '30px',
    paddingBottom: '10px',
  };

  const activeTab = {
    color: '#ff0055',
    fontWeight: 'bold',
    borderBottom: '2px solid #ff0055',
    paddingBottom: '4px',
   
  };

  const buttonStyle = {
    marginTop: '30px',
    background: 'linear-gradient(to right, #ff0055, #ff0055)',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const playIcon = {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '50%',
    padding: '8px 12px',
    marginLeft: '10px',
    fontWeight: 'bold',
  };

  const circleBg = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #ff0055 40%, transparent 41%)',
    zIndex: 0,
  };

  const experienceBox = {
    backgroundColor: '#ff0055',
    color: '#fff',
    padding: '20px',
    width: '140px',
    position: 'absolute',
    top: '-20px',
    left: '-20px',
    borderRadius: '10px',
    zIndex: 2,
    textAlign: 'center',
  };

  const experienceText = {
    margin: 0,
    fontSize: '16px',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '100%',
    borderRadius: '10px',
    zIndex: 1,
    position: 'relative',
    height:"400px",
  };

  const badgeStyle = {
    marginTop: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    display: 'inline-block',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
    zIndex: 1,
    position: 'relative',
    textAlign: 'left',
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        {/* Left Column */}
        <div style={leftCol}>
          <p style={{ ...blueText, fontWeight: 'bold' }}>About us</p>
          <h1 style={heading}>
            Choose <span style={blueText}>The Best</span> IT Service Company
          </h1>
          <p style={paragraph}>
            ITSoft has been optimized to give your visitors the best experience in terms of UX/UI, with a unique design.
          </p>

          {/* Tabs */}
          <div style={tabNav}>
            <span style={activeTab}>Our Mission</span>
            <span style={{ fontWeight: 'bold' }}>Our Vision</span>
            <span style={{ fontWeight: 'bold' }}>Our Value</span>
          </div>

          <p style={paragraph}>
            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes;
            that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling
            apart. We’ve raised the standards in this industry and are a leading cybersecurity.
          </p>

          {/* Button */}
          <button style={buttonStyle}>
            Check details about our company <span style={playIcon}>&#9654;</span>
          </button>
        </div>

        {/* Right Column */}
        <div style={rightCol}>
          <div style={circleBg}></div>
          <div style={experienceBox}>
            <h2 style={{ fontSize: '32px', margin: '0 0 5px 0' }}>12</h2>
            <p style={experienceText}>years of experiences</p>
          </div>
          <img
            src="assets/images/services-4.webp"
            alt="Professional Woman"
            style={imageStyle}
          />
          <div style={badgeStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: '24px', marginRight: '10px' }}>⭐</div>
              <div>
                <h4 style={{ margin: 0 }}>Best Awarded Company</h4>
                <p style={{ fontSize: '14px', margin: 0, color: '#555' }}>
                  We adapt our delivery to the way you work, whether as an external provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
