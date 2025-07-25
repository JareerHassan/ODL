import React from "react";

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.8",
    color: "#333",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  };

  const headingStyle = {
    fontSize: "36px",
    marginBottom: "30px",
    color: "#2c3e50",
    textAlign: "center",
  };

  const subheadingStyle = {
    fontSize: "26px",
    marginTop: "30px",
    marginBottom: "15px",
    color: "#34495e",
    borderBottom: "2px solid #eee",
    paddingBottom: "8px",
  };

  const paragraphStyle = {
    marginBottom: "20px",
    fontSize: "16px",
    color: "#555",
  };

  const footerStyle = {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "14px",
    color: "#888",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>

      <p style={paragraphStyle}>
        Your privacy is important to us. This policy outlines how we collect,
        use, and protect your information when you visit our website.
      </p>

      <h2 style={subheadingStyle}>Information We Collect</h2>
      <p style={paragraphStyle}>
        We may collect personal data such as your name, email address, and
        contact information when you interact with our site through forms,
        subscriptions, or other features.
      </p>

      <h2 style={subheadingStyle}>How We Use Information</h2>
      <p style={paragraphStyle}>
        Collected data is used to personalize your experience, improve our
        services, respond to inquiries, and send periodic updates (only if you
        opt-in).
      </p>

      <h2 style={subheadingStyle}>Data Security</h2>
      <p style={paragraphStyle}>
        We implement appropriate technical and organizational measures to
        safeguard your data and prevent unauthorized access.
      </p>

      <h2 style={subheadingStyle}>Third-Party Services</h2>
      <p style={paragraphStyle}>
        Some services on our site may be delivered by third parties (e.g.,
        analytics providers). They may collect information under their own
        privacy policies.
      </p>

      <h2 style={subheadingStyle}>Your Rights</h2>
      <p style={paragraphStyle}>
        You may request access to, correction of, or deletion of your personal
        information. You may also object to certain uses of your data.
      </p>

      <h2 style={subheadingStyle}>Changes to This Policy</h2>
      <p style={paragraphStyle}>
        We may update this policy periodically. Please check this page regularly
        to stay informed about our practices.
      </p>

      <p style={paragraphStyle}>
        If you have questions about this policy, feel free to contact us at any
        time.
      </p>

      <div style={footerStyle}>© {new Date().getFullYear()} Oxmite Digital LTD</div>
    </div>
  );
};

export default PrivacyPolicy;
