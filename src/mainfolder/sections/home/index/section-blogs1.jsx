"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionBlogs1() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const blogs = [
    {
      img: "/assets/images/services-1.webp",
      title:
        "Standard size of business agency kal Consulat Latest Management.",
    },
    {
      img: "/assets/images/services-2.webp",
      title:
        "The Value of a Trusted Partner for Service Provider Program Management.",
    },
    {
      img: "/assets/images/services-3.webp",
      title:
        "Technologent Announced as Finalists at 2022 Best IT County Awards.",
    },
    {
      img: "/assets/images/services-4.webp",
      title:
        "Standard size of business agency kal Consulat Latest Management.",
    },
    {
      img: "/assets/images/services-5.webp",
      title:
        "The Value of a Trusted Partner for Service Provider Program Management.",
    },
    {
      img: "/assets/images/services-6.webp",
      title:
        "Technologent Announced as Finalists at 2022 Best IT County Awards.",
    },
  ];

  return (
    <div className="section-full bg-black p-t110 p-b80 wow fadeInDown">
      <div className="container">
        <div className="section-head center">
          <p className="fs-5 fw-bold" style={{ color: "#ff0055" }}>
            From Vision to Virtual.
          </p>
          <h2 className="ourmain-heading">Our Latest News</h2>
        </div>

        <div className="section-content">
          <Slider {...sliderSettings}>
            {blogs.map((blog, index) => (
              <div key={index} className="item px-2">
                <div className="sx-latest-post-st-1">
                  <div className="sx-post-media sx-img-effect img-reflection">
                    <Link href="/blogs/detail">
                      <Image
                        src={blog.img}
                        alt=""
                        width={600}
                        height={400}
                        className="w-full"
                      />
                    </Link>
                  </div>
                  <div className="sx-post-info p-t30">
                    <div className="sx-post-meta">
                      <ul>
                        <li className="post-date text-white">
                            <i className="fa fa-calendar text-white" />{" "}
                            <span className="text-white" >01 Jan 2023</span>
                      
                        </li>
                        <li className="post-author text-white">
                            <i className="fa fa-comments text-white" />{" "}
                            <span className="text-white">0 Comments</span>
                       
                        </li>
                      </ul>
                    </div>
                    <div className="sx-post-title">
                      <h4 className="post-title text-white">
                          {blog.title}
                      </h4>
                    </div>
                  
<div className="sx-post-readmore">
  <div
    title="READ MORE"
    rel="bookmark"
    className="site-button icon text-decoration-none"
  >
    <i className="fa fa-long-arrow-right" />
    Read More
  </div>
</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SectionBlogs1;
