'use client';
import Link from "next/link";
import Banner from "../../sections/common/banner";
import Image from "next/image";
import { bannerData } from "../../../globals/banner";
import { FaFacebookF, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

const teamMembers = [
  {
    name: "Michael Smith",
    role: "Managing Director",
    image: "assets/images/services-1.webp",
  },
  {
    name: "Delilah Brooklyn",
    role: "Managing Director",
    image: "assets/images/services-2.webp",
  },
  {
    name: "Leilani Kennedy",
    role: "Managing Director",
    image: "assets/images/services-3.webp",
  },
  {
    name: "Bella Natalia",
    role: "Managing Director",
    image: "assets/images/services-4.webp",
  },
  {
    name: "Michael Smith",
    role: "Managing Director",
    image: "assets/images/services-5.webp",
  },
  {
    name: "Delilah Brooklyn",
    role: "Managing Director",
    image: "assets/images/services-6.webp",
  },
  {
    name: "Leilani Kennedy",
    role: "Managing Director",
    image: "assets/images/services-7.webp",
  },
  {
    name: "Bella Natalia",
    role: "Managing Director",
    image: "assets/images/services-8.webp",
  },
];

function TeamPage() {
  return (
    <>
      <Banner _data={bannerData.team} />

      <div className="section-full p-t110 p-b80 bg-black sx-ourteam-outer">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title fw-bold">Our Services</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title text-white">IT Solution Team Members</h2>
            </div>
          </div>
          {/* TITLE END */}

          <div className="section-content">
            <div className="row sx-our-team-section">
              {teamMembers.map((member, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                  <div className="our-team-2">
                    <div className="profile-image">
<Image src={`/${member.image}`} alt={member.name} width={300} height={300} />
                      <div className="icons">
                        <a className="text-white fs-5 px-1"   href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <FaFacebookF />
                        </a>
                        <a className="text-white fs-5 px-1" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <FaInstagram />
                        </a>
                        <a className="text-white fs-5 px-1" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <FaDribbble />
                        </a>
                        <a className="text-white fs-5 px-1" href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                          <FaBehance />
                        </a>
                      </div>
                    </div>
                    <div className="figcaption">
            <p>{member.role}</p>
<h4 className="sx-title">
 <Link
  href="/about-us"
  style={{
    textDecoration: "none",
    color: "white",
  }}
  onMouseEnter={(e) => (e.target.style.color = "#ff0055")} 
  onMouseLeave={(e) => (e.target.style.color = "white")}
>
  {member.name}
</Link>

</h4>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamPage;
