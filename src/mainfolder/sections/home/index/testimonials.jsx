import React, { useState } from "react";

const testimonials = [
  {
    name: "Sachin Diwar",
    role: "CEO / Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Ordered my first mobile app development to ITSoft Solutions. I was inexperienced contractor but they carefully listened to my request and try to deliver the best quality of service. All phone calls and emails are answered very professionally.",
  },
  {
    name: "Ayesha Khan",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "The team is outstanding. They understood our needs perfectly and delivered a stunning app ahead of schedule. Communication was excellent!",
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 4,
    text: "Great experience working with this company. Their expertise and dedication reflect in the final product. Will definitely recommend.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonials[currentIndex];
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to left, rgba(40, 39, 39, 0.6), rgba(42, 50, 65, 0.9)), url('/assets/images/slider-2.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
        color: "#fff",
        height: "500px",
        position: "relative",
        fontFamily: "Arial, sans-serif",
        marginBottom: isMobile ? "360px" : "0px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
          <button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "30px",
              border: "none",
              marginBottom: "20px",
            }}
          >
            Testimonials ~
          </button>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "white" }}>
            Here’s what our <span style={{ color: "#ff0055" }}>customers</span>{" "}
            have said.
          </h2>
          <p style={{ marginTop: "20px", lineHeight: "1.6", color: "#ccc" }}>
            Simplified IT is designed to help make sure you and your data is
            protected and your computer runs its best. The network Access
            provides is valuable.
          </p>
          <a
            href="/testimonials"
            className="cta-one__btn thm-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
              background:
                "linear-gradient(to left, #ff0055 , #ff0055)",
              color: "#fff",
              border: "none",
              borderRadius: "40px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              height: "50px",
              width: "200px",
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
            View More
          </a>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            flex: "1 1 45%",
            minWidth: "300px",
            marginTop: "20px",
          }}
        >
          <div
            style={{ color: "#FFB400", fontSize: "20px", marginBottom: "10px" }}
          >
            {"★".repeat(current.rating)}
          </div>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            “{current.text}”
          </p>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img
              src={current.image}
              alt={current.name}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "3px solid #ff0055",
                marginRight: "15px",
              }}
            />
            <div>
              <strong style={{ fontSize: "18px" }}>{current.name}</strong>
              <br />
              <span style={{ color: "#ff0055", fontWeight: "bold" }}>
                {current.role}
              </span>
            </div>
          </div>
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button
              onClick={handlePrev}
              style={{
                backgroundColor: "#ff0055",
                color: "#fff",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "#ff0055",
                color: "#fff",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
