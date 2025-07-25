import React from "react";

const TermsAndConditions = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Segoe UI, sans-serif",
    lineHeight: "1.7",
    color: "#333",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#222",
  };

  const sectionHeading = {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "25px",
    marginBottom: "10px",
    color: "#444",
  };

  const paragraphStyle = {
    fontSize: "16px",
    marginBottom: "15px",
    textAlign: "justify",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Terms & Conditions</h1>

      <h2 style={sectionHeading}>1. Introduction</h2>
      <p style={paragraphStyle}>
        Welcome to our website. By accessing or using our services, you agree to be bound by these Terms & Conditions. Please read them carefully.
      </p>

      <h2 style={sectionHeading}>2. Intellectual Property</h2>
      <p style={paragraphStyle}>
        All content, logos, designs, and intellectual property are the property of the company. You may not reuse or reproduce any material without permission.
      </p>

      <h2 style={sectionHeading}>3. User Responsibilities</h2>
      <p style={paragraphStyle}>
        You agree to use our website and services lawfully and not for any illegal or unauthorized purposes. Any misuse may result in termination of access.
      </p>

      <h2 style={sectionHeading}>4. Limitation of Liability</h2>
      <p style={paragraphStyle}>
        We are not liable for any damages that may occur from using our website or services. Use at your own risk.
      </p>

      <h2 style={sectionHeading}>5. Changes to Terms</h2>
      <p style={paragraphStyle}>
        We reserve the right to update or change these terms at any time. Any changes will be posted on this page.
      </p>

      <p style={{ ...paragraphStyle, fontWeight: "bold", textAlign: "center" }}>
        If you have any questions, feel free to contact us.
      </p>
    </div>
  );
};

export default TermsAndConditions;
