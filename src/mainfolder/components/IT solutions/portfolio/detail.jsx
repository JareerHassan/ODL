'use client';
import Link from "next/link";
import Banner from "../../../sections/common/banner";
import ItodoImage from "../../../elements/itodo-img";
import { NavLink, useParams } from "react-router-dom";
import { bannerData } from "../../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";
// import SectionVideo1 from "../../../sections/home/index/section-case-study.jsx";


   

const caseStudies = [
  {
    id: "1",
    title: "IT Solution Business Mockup Land",
    subtitle: "Apps Design",
    image: "images/services-1.webp",
    description: "This is detailed content for Case Study 1."
  },
  {
    id: "2",
    title: "Visit Our Planned Modern Farm",
    subtitle: "Branding Design",
    image: "images/services-2.webp",
    description: "This is detailed content for Case Study 2."
  },
  {
    id: "3",
    title: "Another IT Mockup Land",
    subtitle: "Development",
    image: "images/services-3.webp",
    description: "This is detailed content for Case Study 3."
  },
    {
        id: "4",
        title: "Visit Our Planned Modern Farm",
        subtitle: "Branding Design",
        image: "images/services-4.webp"
    },  {
        id: "5",
        title: "Visit Our Planned Modern Farm",
        subtitle: "Branding Design",
        image: "images/services-1.webp"
    },  {
        id: "6",
        title: "Visit Our Planned Modern Farm",
        subtitle: "Branding Design",
        image: "images/services-2.webp"
    },  {
        id: "7",
        title: "Visit Our Planned Modern Farm",
        subtitle: "Branding Design",
        image: "images/services-3.webp"
    },
     {
        id: "8",
        title: "Visit Our Planned Modern Farm",
        subtitle: "Branding Design",
        image: "images/services-4.webp"
    }
    
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
        
            <Banner _data={bannerData.portfoliodetail}  />
            

            {/* SECTION CONTENT START */}
            <div className="section-full  p-t110 mobile-page-padding ">
                <div className="container ">
                    <div className="sx-pic-l">
                        <ItodoImage src={`/${item.image}`}  alt={item.title} />
                    </div>
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head left">
                            <div className="sx-head-s-title">{item.title}</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">{item.subtitle}</h2>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="sx-our-service-info m-b30">
                            <p>{item.description}
                            </p>
                            <p>Nullam id ultricies tellus. Nulla tempor, elit ac maximus accumsan, urna arcu congue neque, non venenatis leo erat sed massa. Nam gravida porttitor quam sit amet vestibulum. Cras tincidunt mauris
                                rutrum. Duis tincidunt, nulla venenatis eleifend sollicitudin, lacus purus iaculis mauris, et hendrerit ex dolor ut nunc.
                            </p>
                            <div className="sx-about-icon-bx2-column bg-black m-tb50">
                                <div className="row ">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-category" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Category:</span>
                                                <span className="sx-icon-bx-title-info">Workout</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-calendar" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Date:</span>
                                                <span className="sx-icon-bx-title-info">June 18, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-leaf" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Author:</span>
                                                <span className="sx-icon-bx-title-info">Fabronia Andreas</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-image" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Class:</span>
                                                <span className="sx-icon-bx-title-info">Boxing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h2 className="sx-title">Our Success Journey We can Provide.</h2>
                                            <p>Nullam id ultricies tellus. Nulla tempor, elit ac maximus accumsan, urna arcu congue neque, non venenatis leo erat sed massa.
                                                amet vestibulum. Cras tincidunt mauris id nisl rutrum rutrum. Duis tincidunt, nulla venenatis eleifend sollicitudin, lacus purus iacul
                                                nunc. Maecenas ultrices lorem sed nulla scelerisque ornare. Aliquam quis orci sit amet arcu tincidunt euismod ac eget odio. Viva
                                                interdum arcu massa, sed tristique odio luctus id. Nulla a porttitor felis, sit amet volutpat ante.
                                            </p>
                                            <p>Maecenas at dui ut leo efficitur tempus. Mauris elementum elit sed ex finibus aliquet. Donec turpis turpis, facilisis ac ante quis,
                                                pulvinar nibh ut risus euismod blandit. Proin cursus neque eget risus accumsan placerat. Quisque sapien lorem, maximus id turpi
                                                Maecenas ac dolor eget massa condimentum aliquet. Duis eget nisi facilisis eros sagittis semper sed ac ligula.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/portfolio/pic-2.webp" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h3 className="sx-title">IT Solution Business Planning system.</h3>
                                            <p>Mauris porta ligula non blandit auctor. Vestibulum ut tortor ullamcorper lacus hendrerit vestibulum. Suspendisse eget lobortis pur
                                                interdum vehicula non quis velit. Nunc ac aliquet elit, a euismod augue. Sed posuere, lorem a aliquet ullamcorper, tellus elit orna
                                                nunc. Maecenas eget condimentum odio. Nunc mollis finibus nibh, ac tincidunt odio imperdiet non. Sed sit amet magna rhoncus,
                                                lacus. Vestibulum dignissim semper orci sed bibendum. Donec dapibus posuere risus, sit amet luctus quam rutrum id. Suspendis
                                                eu, placerat non diam. Aenean vitae magna a risus semper laoreet.</p>
                                            <p>Nullam vitae dui euismod, pulvinar mauris quis, sagittis ante. Pellentesque nec diam tincidunt, lobortis ligula eget, ultricies elit.
                                                luctus odio efficitur non. Suspendisse tincidunt sem ut dui tempus, sit amet tincidunt ante mattis. Cras interdum orci sit amet turpi
                                                consequat. Curabitur eu porttitor nibh, a condimentum enim. Mauris nec facilisis augue, in imperdiet mi.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/portfolio/pic-3.webp" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s-post-pagination-control previous-next previous next">
                        <div className="paging-left paging-item">
                            <div className="paging-content">
                                <NavLink className="paging-link" to="/blogs">
                                    <i className="fa  fa-long-arrow-left" />
                                </NavLink>
                                <div className="paging-content-inner">
                                    <NavLink className="paging-link2" to="/blogs">Prev Services</NavLink>
                                    <h4 className="paging-title">
                                        <NavLink to="/blogs">IT Solution Business Mokup land</NavLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="paging-right paging-item">
                            <div className="paging-content reverse">
                                <NavLink className="paging-link" to="/blogs">
                                    <i className="fa  fa-long-arrow-right" />
                                </NavLink>
                                <div className="paging-content-inner">
                                    <NavLink className="paging-link2" to="/blogs">Next Portfolio</NavLink>
                                    <h4 className="paging-title">
                                        <NavLink to="/blogs">IT Solution Cources</NavLink>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <SectionVideo1 /> */}
            
            {/* OUR CASE STUDY SECTION 
            <div className="section-full p-t110 p-b80 bg-black sx-case-study3-outer">
                <div className="container">*/}
                    {/* TITLE START */}
                    {/* <div className="section-head center">
                        <div className="sx-head-s-title">Our Case Study</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Related Case Study</h2>
                        </div>
                    </div> */}
                    {/* TITLE END */}
                    {/* <div className="section-content">
                        <div className="owl-carousel sx-case-st-carousel-2 m-b30"> */}
                            {/*One block*/}
                            {/* <div className="item">
                                <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio2"><ItodoImage src="images/case-study-3/pic-1.webp" alt="" /></NavLink>
                                        <NavLink to="/portfolio2" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Apps Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio2">
                                            <h2 className="sx-title">IT Solution Mokup.</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/portfolio2" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/*One two*/}
                            {/* <div className="item">
                                <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio2"><ItodoImage src="images/case-study-3/pic-2.webp" alt="" /></NavLink>
                                        <NavLink to="/portfolio2" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Branding Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio2">
                                            <h2 className="sx-title">Visit Our planned.</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/portfolio2" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/*One three*/}
                            {/* <div className="item">
                                <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio2"><ItodoImage src="images/case-study-3/pic-3.webp" alt="" /></NavLink>
                                        <NavLink to="/portfolio2" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Apps Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio2">
                                            <h2 className="sx-title">Android &amp; Ios.</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/portfolio2" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/*One four*/}
                            {/* <div className="item">
                                <div className="sx-case-study-bx three-blocks sx-overlay-effect">
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio2"><ItodoImage src="images/case-study-3/pic-1.webp" alt="" /></NavLink>
                                        <NavLink to="/portfolio2" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Branding Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio2">
                                            <h2 className="sx-title">Visit Our planned.</h2>
                                        </NavLink>
                                        <div className="sx-case-readmore">
                                            <NavLink to="/portfolio2" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        {/* </div>
                    </div>
                </div>
            </div> */}
            {/* OUR CASE STUDY END */}

            
        </>
    )
}

export default PortfolioDetailPage;