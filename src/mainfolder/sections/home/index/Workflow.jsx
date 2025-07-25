import React from "react";

const steps = [
  { title: "1. IDEA GENERATION" },
  { title: "2. DEFINING PRODUCT" },
  { title: "3. PROTOTYPE DEVELOPMENT" },
  { title: "4. DEVELOP PRODUCT" },
  { title: "5. TESTING" },
  { title: "6. DEPLOYMENT" },
];

const WorkflowDiagram = () => {
  const RADIUS = 250;
  const CENTER_SIZE = 220;
  const CIRCLE_SIZE = 120;
  const PRIMARY_COLOR = "#ff0055";

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        padding: "120px 0 20px 0",
      }}
    >
      {/* Background SVG Animation */}
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
        }}
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#ff0055"
          strokeWidth="1"
        />
        <circle
          cx="800"
          cy="300"
          r="100"
          fill="none"
          stroke="#ff0055"
          strokeWidth="1"
        />
        <path
          d="M 0 400 Q 300 200 1000 400"
          fill="none"
          stroke="#ff0055"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="0 -10"
            dur="6s"
            repeatCount="indefinite"
            direction="alternate"
          />
        </path>
      </svg>

      {/* Floating Particles */}
      <div className="custom-particles">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          bottom: "50px",
        }}
      >
        <p className="fs-5 fw-bold" style={{ color: "#ff0055" }}>
          From Vision to Virtual.
        </p>

        <h2 className="ourmain-heading">Our Product Development</h2>
      </div>

      {/* Desktop: Circular View */}
      <div className="diagram-container desktop">
        <div className="diagram-outer">
          {/* Rotating Small Circles */}
          <div className="outer-rotating">
            {steps.map((step, index) => {
              const angle = (360 / steps.length) * index - 90;
              const rad = (angle * Math.PI) / 180;

              const fromCenter = CENTER_SIZE / 2;
              const toCircle = RADIUS - CIRCLE_SIZE / 2;

              const x1 = RADIUS + fromCenter * Math.cos(rad);
              const y1 = RADIUS + fromCenter * Math.sin(rad);
              const x2 = RADIUS + toCircle * Math.cos(rad);
              const y2 = RADIUS + toCircle * Math.sin(rad);

              const circleX = RADIUS + RADIUS * Math.cos(rad) - CIRCLE_SIZE / 2;
              const circleY = RADIUS + RADIUS * Math.sin(rad) - CIRCLE_SIZE / 2;

              return (
                <React.Fragment key={index}>
                  <svg
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: RADIUS * 2,
                      height: RADIUS * 2,
                      pointerEvents: "none",
                    }}
                  >
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={PRIMARY_COLOR}
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                  </svg>

                  <div
                    style={{
                      width: `${CIRCLE_SIZE}px`,
                      height: `${CIRCLE_SIZE}px`,
                      borderRadius: "50%",
                      backgroundColor: "#000",
                      border: `4px solid ${PRIMARY_COLOR}`,
                      color: "#fff",
                      position: "absolute",
                      top: `${circleY}px`,
                      left: `${circleX}px`,
                      zIndex: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "0.8rem",
                      padding: "10px",
                      boxShadow: `0 0 10px ${PRIMARY_COLOR}55`,
                    }}
                  >
                    {step.title}
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          {/* Center Circle Fixed */}
          <div className="center-wrapper">
            <div className="center-circle">
              6 STAGES OF <br /> PRODUCT <br /> DEVELOPMENT
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View: Linear Steps */}
      <div className="mobile-steps text-center px-3">
        <div className="d-none center-circle center-static mb-4">
          6 STAGES OF <br /> PRODUCT <br /> DEVELOPMENT
        </div>
        {steps.map((step, i) => (
          <div key={i} style={{ position: "relative" }}>
            <div
              className="mb-4 py-4 px-3 rounded-4"
              style={{
                border: `2px solid ${PRIMARY_COLOR}`,
                backgroundColor: "#111",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: `0 0 8px ${PRIMARY_COLOR}55`,
                position: "relative",
                zIndex: 2,
              }}
            >
              {step.title}
            </div>

            {/* Connector line (except last box) */}
            {i < steps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "50px",
                  borderLeft: `5px dotted ${PRIMARY_COLOR}`,
                  zIndex: 1,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="mt-5 pt-5 fs-2"
        style={{
          textAlign: "center",
          color: "#ccc",
          zIndex: 2,
          position: "relative",
        }}
      >
        🚀 Let’s build something amazing together.
      </div>

      {/* Styles */}
      <style>{`
        .diagram-container {
          position: relative;
          display: flex;
          justify-content: center;
          z-index: 2;
        }

        .diagram-outer {
          width: ${RADIUS * 2}px;
          height: ${RADIUS * 2}px;
          position: relative;
        }

        .outer-rotating {
          position: absolute;
          top: 0;
          left: 0;
          width: ${RADIUS * 2}px;
          height: ${RADIUS * 2}px;
          animation: alternateSpinClockwise 10s linear infinite;
        }

        .center-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 30;
        }

        .center-circle {
          width: ${CENTER_SIZE}px;
          height: ${CENTER_SIZE}px;
          border-radius: 50%;
          border: 5px dashed ${PRIMARY_COLOR};
          background-color: #000;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-weight: bold;
          font-size: 1rem;
          padding: 20px;
          box-shadow: 0 0 20px ${PRIMARY_COLOR}88;
          animation: alternateSpinCounterClockwise 10s linear infinite;
        }

        .center-static {
          animation: none !important;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .desktop {
            display: none !important;
          }
          .mobile-steps {
            display: block;
          }
        }

        @media (min-width: 769px) {
          .mobile-steps {
            display: none !important;
          }
        }

        @keyframes alternateSpinClockwise {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes alternateSpinCounterClockwise {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-180deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0.4; }
          100% { transform: translateY(-20px) translateX(10px); opacity: 0.1; }
        }

        .custom-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .custom-particles .particle {
          position: absolute;
          background-color: #ff0055;
          border-radius: 50%;
          opacity: 0.3;
          animation: float ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default WorkflowDiagram;
