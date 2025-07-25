'use client';
import Link from "next/link";
import Banner from "../../sections/common/banner";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import Image from "next/image";
import { bannerData } from "../../../globals/banner";

// Blog post data array
export const blogPosts = [
  {
    id: 1,
    image: "/assets/images/services-1.webp",
    date: "01 Jan 2023",
    comments: "0 Comments",
        para: "I am blog",

    title: "Standard size of business agency kal Consulat Latest Management.",
  },
  {
    id: 2,
    image: "/assets/images/services-2.webp",
    date: "01 Jan 2023",
    comments: "0 Comments",
        para: "I am blog",

    title: "Consulting firms should embrace digital to thrive in the market.",
  },
  {
    id: 3,
    image: "/assets/images/services-3.webp",
    date: "01 Jan 2023",
    comments: "0 Comments",
        para: "I am blog",

    title: "Leadership strategies for emerging businesses in 2025.",
  },
  {
    id: 4,
    image: "/assets/images/services-4.webp",
    date: "02 Jan 2023",
    comments: "3 Comments",
        para: "I am blog",

    title: "How branding impacts the perception of your agency.",
  },
  {
    id: 5,
    image: "/assets/images/services-5.webp",
    date: "03 Jan 2023",
        para: "I am blog",

    comments: "1 Comment",
    title: "The future of work and remote team strategies.",
  },
  {
    id: 6,
    image: "/assets/images/services-6.webp",
    date: "04 Jan 2023",
    comments: "0 Comments",
        para: "I am blog",

    title: "Why user experience is key to client retention.",
  },
  {
    id: 7,
    image: "/assets/images/services-7.webp",
    date: "05 Jan 2023",
    comments: "5 Comments",
        para: "I am blog",

    title: "How to scale up your small business with tech.",
  },
  {
    id: 8,
    image: "/assets/images/services-8.webp",
    date: "06 Jan 2023",
    comments: "2 Comments",
    para: "I am blog",
    title: "Effective client communication methods in 2025.",
  },
  {
    id: 9,
    image: "/assets/images/services-2.webp",
    date: "07 Jan 2023",
    comments: "4 Comments",
        para: "I am blog",

    title: "Best digital tools for efficient agency operations.",
  },
];

export default function BlogGridPage() {
  return (
    <>
      <Banner _data={bannerData.bloggrid} />

      {/* SECTION CONTENT START */}
      <div className="section-full  p-t100 p-b0 bg-black mobile-page-padding">
        <div className="container">
          <div className="masonry-outer mfp-gallery news-grid clearfix row">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="masonry-item col-lg-4 col-md-6 col-sm-12 m-b30"
              >
                <div className="sx-latest-post-st-1">
                  <div className="sx-post-media sx-img-effect img-reflection">
<Link href={`/blogs/detail/${post.id}`}>
                      <Image src={post.image} alt={post.title}   width={200}
                      height={100} />
                    </Link>
                  </div>
                  <div className="sx-post-info p-t30">
                    <div className="sx-post-meta">
                      <ul>
                      <li className="post-date">
      <span className="text-white text-decoration-none">
        <i className="fa fa-calendar" /> {post.date}
      </span>
    </li>
                         <li className="post-author">
      <span className="text-white text-decoration-none">
        <i className="fa fa-comments" /> {post.comments}
      </span>
    </li>
                      </ul>
                    </div>
                  <div className="sx-post-title">
  <h4 className="post-title">
    <span className="text-white text-decoration-none">{post.title}</span>
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
          </div>

          {/* Pagination */}
          <div className="sx-pagination-wra text-center">
            <ul className="sx-pagination">
              <li>
                <a href="#">
                  <span className="fa fa-long-arrow-left" />
                </a>
              </li>
              <li>
                <a href="#">01</a>
              </li>
              <li className="active">
                <a href="#">02</a>
              </li>
              <li>
                <a href="#">03</a>
              </li>
              <li>
                <a href="#">04</a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-long-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* SECTION CONTENT END */}
    </>
  );
}

