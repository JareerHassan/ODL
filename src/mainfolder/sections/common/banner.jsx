'use client';
import Link from "next/link";

function Banner({ _data }) {
  return (
    <div
      className="full-landing-image sx-bnr-inr bg-top-center"
      style={{
        backgroundImage: `url(${_data.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff"
      }}
    >
      {/* Black Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="sx-bnr-inr-entry">
          <div className="banner-title-outer">
            <div className="banner-title-name">
              <span className="sx-bnr-sm-title">we are Dedicated</span>
              <h2 className="sx-title">{_data.title}</h2>
            </div>

            {/* BREADCRUMB ROW */}
            <ul className="sx-breadcrumb breadcrumb-style-2">
              <li><Link href="/" style={{textDecoration:'none'}}>Home</Link></li>
              <li>{_data.crumb}</li>
            </ul>
            {/* BREADCRUMB ROW END */}
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Banner;
