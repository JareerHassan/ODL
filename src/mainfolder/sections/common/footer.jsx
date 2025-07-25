"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa";


function Footer() {
  return (
    <footer className="site-footer bg-black">
      {/* TOP CTA SECTION */}
      <div
        style={{
          borderBottom: "1px solid black",
          padding: "20px 0",
          backgroundColor: "#ff0055",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-3">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl mt-2 lg:text-4xl xl:text-5xl font-bold leading-snug">
                Looking for the Best IT Business Solutions?
              </h2>
              <p className="mt-1 text-sm md:text-base opacity-90 max-w-md mx-auto lg:mx-0">
                Looking for the Best IT Business Solutions?
              </p>
            </div>
         <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
  }}
>
  <a
    href="/contact-us"
    style={{
      textDecoration: "none",
    }}
  >
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        background: "transparent",
        color: "#fff",
        border: "2px solid white",
        borderRadius: "40px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        height: "60px",
        width: "200px",
        transition: "background 0.3s ease",
      }}
      onMouseOver={(e) =>
        (e.target.style.background =
          "linear-gradient(to left, #ff0055, #ff0055)")
      }
      onMouseOut={(e) => (e.target.style.background = "transparent")}
    >
      Get a Quote
    </button>
  </a>
</div>

          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="footer-top pt-5 pb-2">
        <div>
          <div className="row gx-3 gy-3">
            {/* ABOUT COMPANY */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="widget widget_about ms-2">
                <div className="logo-footer clearfix pb-2">
                  <Link href="#" className="text-decoration-none">
                  <div style={{width:'100px'}}>
                    <Image
                      src="/assets/images/logo-1.webp"
                      alt="logo"
                      width={250}
                      height={50}
                    />
                    </div>
                  </Link>
                </div>
                <p style={{ marginBottom: "8px" }}>
                  We work with a passion of taking challenges and creating new
                  ones in advertising sector.
                </p>
                <div className="widget_about-call-section d-flex align-items-start">
                  <div className="sx-f-call-icon">
                    <FaPhone className="mb-5" />
                  </div>
                  <div className="sx-f-call-section">
                    <span>Contact us 24/7</span>
                    <a href="tel:+92 343 5006062" className="text-decoration-none">
                      +92 343 5006062
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPLORE LINKS */}
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="widget widget_services">
                <h4 className="sx-f-title mb-2 ">Explore Links</h4>
                <ul style={{ paddingLeft: 0, marginBottom: 0 }}>
                  <li className="no-underline"><Link href="/services" style={{textDecoration:'none'}}>Our Services</Link></li>
                  <li><Link href="/team"  style={{textDecoration:'none'}}>Meet Our Team</Link></li>
                  <li><Link href="/portfolio"  style={{textDecoration:'none'}}>Our Portfolio</Link></li>
                  <li><Link href="/contact-us"  style={{textDecoration:'none'}}>Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* USEFUL LINKS */}
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="widget widget_services">
                <h4 className="sx-f-title mb-2">Useful Links</h4>
                <ul style={{ paddingLeft: 0, marginBottom: 0 }}>
                  <li><Link href="/blogs"  style={{textDecoration:'none'}}>Blogs</Link></li>
                  <li><Link href="/gallery"  style={{textDecoration:'none'}}>Gallery</Link></li>
                  <li><Link href="/portfolio"  style={{textDecoration:'none'}}>Portfolio</Link></li>
                                <li><Link href="/blogs"  style={{textDecoration:'none'}}>News</Link></li>

                </ul>
              </div>
            </div>

            {/* SOLUTIONS */}
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="widget widget_info">
                <h4 className="sx-f-title mb-2">Solutions</h4>
                <ul style={{ paddingLeft: 0, marginBottom: 0 }}>
                  <li className="d-flex mb-2">
                    <i className="flaticon-phone me-2" />
                    <div>
                      <a href="tel:+49 160 90338154"  style={{textDecoration:'none'}}>+49 160 90338154</a><br />
                      <a href="tel:+971 562228179"  style={{textDecoration:'none'}}>+971 562228179</a>
                    </div>
                  </li>
                  <li className="d-flex mb-2">
                    <i className="flaticon-email me-2" />
                    <p>oxmite@gmail.com</p>
                  </li>
                  <li className="d-flex">
                    <i className="flaticon-maps-and-flags me-2" />
                    <p>16, street 5 , Block F , PAF Fazaia Islamabad</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget_insta-gallery">
                <h4 className="sx-f-title mb-2">Instagram</h4>
                <ul className="d-flex flex-wrap p-0 m-0">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <li key={num} style={{ width: "32%", listStyle: "none" }}>
                      <div className="sx-f-insta">
                        <Link href="/gallery">
                          <Image
                            src={`/assets/images/services-${num}.webp`}
                            alt={`insta-${num}`}
                            width={80}
                            height={80}
                          />
                          <i className="FaInstagram" />
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div>
        <div className="sx-f-bottom-section bg-transparent">
          <div className="sx-f-social">
            <ul>
              <li><a href="https://www.facebook.com/oxmite/"><i className="flaticon-facebook" /></a></li>
              <li><a href="https://twitter.com/oxmite/"><i className="flaticon-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/oxmite/"><i className="flaticon-linkedin" /></a></li>
              <li><a href="https://instagram.com/oxmite.digital.ltd"><i className="flaticon-instagram" /></a></li>
            </ul>
          </div>
          <div className="sx-f-copy bg-black text-white text-center py-2">
            © 2025 by <Link href="/"  style={{textDecoration:'none'}}>Oxmite Digital LTD.</Link> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
