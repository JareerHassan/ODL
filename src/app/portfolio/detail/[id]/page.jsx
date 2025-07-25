"use client";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/mainfolder/sections/common/banner";
import { useParams } from "next/navigation";
import { bannerData } from "../../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";
import { FaCalendarAlt, FaLeaf, FaImage, FaTags } from "react-icons/fa";

const caseStudies = [
  {
    id: "1",
    title: "IT Solution Business Mockup Land",
    subtitle: "Apps Design",
    image: "/assets/images/services-1.webp",
    description: "This is detailed content for Case Study 1.",
  },
  {
    id: "2",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "/assets/images/services-2.webp",
    description: "This is detailed content for Case Study 2.",
  },
  {
    id: "3",
    title: "Another IT Mockup Land",
    subtitle: "Development",
    image: "/assets/images/services-3.webp",
    description: "This is detailed content for Case Study 3.",
  },
  {
    id: "4",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "/assets/images/services-4.webp",
  },
  {
    id: "5",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "/assets/images/services-1.webp",
  },
  {
    id: "6",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "/assets/images/services-2.webp",
  },
  {
    id: "7",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "/assets/images/services-3.webp",
  },
  {
    id: "8",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "/assets/images/services-4.webp",
  },
];

function PortfolioDetailPage() {
  const { id } = useParams();

  // find item based on id
  const item = caseStudies.find((study) => study.id === id);

  //   useEffect(() => {
  //     loadScript();
  //   }, []);

  if (!item) {
    return (
      <div className="container p-t100 p-b100">
        <h2>Case Study Not Found</h2>
      </div>
    );
  }

  // useEffect(()=>{
  //     loadScript("js/custom.js")
  // })

  return (
    <>
      <Banner _data={bannerData.portfoliodetail} />

      {/* SECTION CONTENT START */}
      <div className="section-full bg-black p-1 text-white p-t110 mobile-page-padding ">
        <div className="container">
          <div className="sx-pic-l">
            <Image
              src={`${item.image}`}
              alt={item.title}
              width={600}
              height={400}
            />
          </div>
          <div className="section-content">
            {/* TITLE START */}
            <div className="section-head left">
              <div className="sx-head-s-title" style={{color:'#ff0055'}} >{item.title}</div>
              <div className="sx-head-l-title ">
                <h2 className="sx-title text-white">{item.subtitle}</h2>
              </div>
            </div>
            {/* TITLE END */}
            <div className="sx-our-service-info m-b30">
              <p>{item.description}</p>
              <p>
                Nullam id ultricies tellus. Nulla tempor, elit ac maximus
                accumsan, urna arcu congue neque, non venenatis leo erat sed
                massa. Nam gravida porttitor quam sit amet vestibulum. Cras
                tincidunt mauris rutrum. Duis tincidunt, nulla venenatis
                eleifend sollicitudin, lacus purus iaculis mauris, et hendrerit
                ex dolor ut nunc.
              </p>
              <div
                className="sx-about-icon-bx2-column m-tb50"
                style={{ backgroundColor: "#ff0055", color: "white" }}
              >
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="sx-icon-bx-6">
                      <div className="sx-media sx-text-secondry">
                        <FaTags color="white" size={40} />
                      </div>
                      <div className="sx-icon-bx-info">
                        <span className="sx-icon-bx-title text-white">
                          Category:
                        </span>
                        <span className="sx-icon-bx-title-info text-white">
                          Workout
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="sx-icon-bx-6">
                      <div className="sx-media sx-text-secondry">
                        <FaCalendarAlt color="white" size={40} />
                      </div>
                      <div className="sx-icon-bx-info">
                        <span className="sx-icon-bx-title text-white">
                          Date:
                        </span>
                        <span className="sx-icon-bx-title-info text-white">
                          June 18, 2019
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="sx-icon-bx-6">
                      <div className="sx-media sx-text-secondry">
                        <FaLeaf color="white" size={40} />
                      </div>
                      <div className="sx-icon-bx-info">
                        <span className="sx-icon-bx-title text-white">
                          Author:
                        </span>
                        <span className="sx-icon-bx-title-info text-white">
                          Fabronia Andreas
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="sx-icon-bx-6">
                      <div className="sx-media sx-text-secondry">
                        <FaImage color="white" size={40} />
                      </div>
                      <div className="sx-icon-bx-info">
                        <span className="sx-icon-bx-title text-white">
                          Class:
                        </span>
                        <span className="sx-icon-bx-title-info text-white">
                          Boxing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sx-r-part-image-content-box">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="sx-r-part-content">
                      <h2 className="sx-title  text-white">
                        Our Success Journey We can Provide.
                      </h2>
                      <p>
                        Nullam id ultricies tellus. Nulla tempor, elit ac
                        maximus accumsan, urna arcu congue neque, non venenatis
                        leo erat sed massa. amet vestibulum. Cras tincidunt
                        mauris id nisl rutrum rutrum. Duis tincidunt, nulla
                        venenatis eleifend sollicitudin, lacus purus iacul nunc.
                        Maecenas ultrices lorem sed nulla scelerisque ornare.
                        Aliquam quis orci sit amet arcu tincidunt euismod ac
                        eget odio. Viva interdum arcu massa, sed tristique odio
                        luctus id. Nulla a porttitor felis, sit amet volutpat
                        ante.
                      </p>
                      <p>
                        Maecenas at dui ut leo efficitur tempus. Mauris
                        elementum elit sed ex finibus aliquet. Donec turpis
                        turpis, facilisis ac ante quis, pulvinar nibh ut risus
                        euismod blandit. Proin cursus neque eget risus accumsan
                        placerat. Quisque sapien lorem, maximus id turpi
                        Maecenas ac dolor eget massa condimentum aliquet. Duis
                        eget nisi facilisis eros sagittis semper sed ac ligula.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="sx-r-part-media">
                      <Image
                        src="/assets/images/portfolio/pic-2.webp"
                        alt="image"
                        width={600}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sx-r-part-image-content-box">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="sx-r-part-content">
                      <h3 className="sx-title  text-white">
                        IT Solution Business Planning system.
                      </h3>
                      <p>
                        Mauris porta ligula non blandit auctor. Vestibulum ut
                        tortor ullamcorper lacus hendrerit vestibulum.
                        Suspendisse eget lobortis pur interdum vehicula non quis
                        velit. Nunc ac aliquet elit, a euismod augue. Sed
                        posuere, lorem a aliquet ullamcorper, tellus elit orna
                        nunc. Maecenas eget condimentum odio. Nunc mollis
                        finibus nibh, ac tincidunt odio imperdiet non. Sed sit
                        amet magna rhoncus, lacus. Vestibulum dignissim semper
                        orci sed bibendum. Donec dapibus posuere risus, sit amet
                        luctus quam rutrum id. Suspendis eu, placerat non diam.
                        Aenean vitae magna a risus semper laoreet.
                      </p>
                      <p>
                        Nullam vitae dui euismod, pulvinar mauris quis, sagittis
                        ante. Pellentesque nec diam tincidunt, lobortis ligula
                        eget, ultricies elit. luctus odio efficitur non.
                        Suspendisse tincidunt sem ut dui tempus, sit amet
                        tincidunt ante mattis. Cras interdum orci sit amet turpi
                        consequat. Curabitur eu porttitor nibh, a condimentum
                        enim. Mauris nec facilisis augue, in imperdiet mi.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="sx-r-part-media">
                      <Image
                        src="/assets/images/portfolio/pic-3.webp"
                        alt="image"
                        width={600}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetailPage;
