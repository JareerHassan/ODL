// Portfolio1Page.jsx
"use client";
import Link from "next/link";
import Banner from "../../../sections/common/banner";
import SectionClients2 from "../../../sections/home/index2/section-clients2";
import Image from "next/image";
import { bannerData } from "../../../../globals/banner";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// Props component
const PortfolioList = ({ items }) => {
  return (
    <div className="masonry-outer mfp-gallery news-grid clearfix row">
      {items.map((item) => (
        <div
          className="masonry-item col-lg-6 col-md-6 col-sm-12 m-b30"
          key={item.id}
        >
          <div className="sx-case-study-bx sx-overlay-effect">
            <div className="sx-case-media sx-img-overlay">
              <Link href={`/portfolio/detail/${item.id}`}>
              <div style={{height:'500px'}}>
                <Image
                  src={`/${item.image}`} 
                  alt={item.title}
                  width={800} 
                  height={200} 
                
                />
                </div>
              </Link>
              <Link
                href={`/portfolio/detail/${item.id}`}
                className="sx-case-link"
              >
<FaArrowUpRightFromSquare size={18} />
              </Link>
            </div>
            <div className="sx-case-info bg-transparent border border-2">
              <div className="sx-s-title fw-bold">{item.subtitle}</div>
              <Link
                className="sx-l-title text-white text-decoration-none"
                href={`/portfolio/detail/${item.id}`}
              >
                <h2 className="sx-title text-white text-dacoration-none">
                  {item.title}
                </h2>
              </Link>
              <div className="sx-case-readmore">
                <Link
                  href={`/portfolio/detail/${item.id}`}
                  title="READ MORE"
                  rel="bookmark"
                  className="site-button icon text-decoration-none"
                >
                  <i className="fa fa-long-arrow-right" /> Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const caseStudies = [
  {
    id: "1",
    title: "IT Solution Business Mockup Land",
    subtitle: "Apps Design",
    image: "assets/images/services-1.webp",
  },
  {
    id: "2",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "assets/images/services-2.webp",
  },
  {
    id: "3",
    title: "IT Solution Business Mockup Land",
    subtitle: "Apps Design",
    image: "assets/images/services-3.webp",
  },
  {
    id: "4",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "assets/images/services-4.webp",
  },
  {
    id: "5",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "assets/images/services-1.webp",
  },
  {
    id: "6",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "assets/images/services-2.webp",
  },
  {
    id: "7",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "assets/images/services-3.webp",
  },
  {
    id: "8",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "assets/images/services-4.webp",
  },
];

function Portfolio1Page() {
  return (
    <>
      <Banner _data={bannerData.portfolio1} />

      <div className="section-full p-t100 p-b40 bg-black mobile-page-padding">
        <div className="container">
          <div className="section-content">
            <div className="large-title-block">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="section-head left">
                    <div className="sx-head-s-title">Our Case Study</div>
                    <div className="sx-head-l-title">
                      <h2 className="sx-title text-white">
                        Our Itodo IT Solution Special Case Studies.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="large-title-info">
                    <p className="text-white">
                      Nunc tempor ultrices iaculis. Cras suscipit odio ut neque
                      interdum, sed faucibus lorem feugiat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE STUDIES with props */}
            <PortfolioList items={caseStudies} />
          </div>
        </div>
      </div>

      <SectionClients2 />
    </>
  );
}

export default Portfolio1Page;
