import Banner from "../../sections/common/banner";
import Image from "next/image";
import Link from "next/link";
import { publicUrlFor } from "../../../globals/constants";
import { bannerData } from "../../../globals/banner";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const galleryItems = [
  { id: 1, cat: "cat-1", img: "1.webp", thumb: "1.jpg" },
  { id: 2, cat: "cat-2", img: "services-2.webp", thumb: "2.jpg" },
  { id: 3, cat: "cat-3", img: "services-3.webp", thumb: "3.jpg" },
  { id: 4, cat: "cat-4", img: "services-4.webp", thumb: "4.jpg" },
  { id: 5, cat: "cat-5", img: "services-5.webp", thumb: "5.jpg" },
  { id: 6, cat: "cat-4", img: "services-6.webp", thumb: "6.jpg" },
  { id: 7, cat: "cat-3", img: "services-7.webp", thumb: "7.jpg" },
  { id: 8, cat: "cat-2", img: "services-8.webp", thumb: "8.jpg" },
  { id: 9, cat: "cat-1", img: "services-2.webp", thumb: "9.jpg" },
];

function GalleryPage() {
  return (
    <>
      <Banner _data={bannerData.gallery} />

      <div className="section-full p-t100 p-b70 mobile-page-padding">
        <div className="container">
          {/* Filter Nav START (optional) */}
          {/* 
                    <div className="filter-navigation-wrap p-b30">
                        <ul className="filter-navigation masonry-filter clearfix">
                            <li className="active"><button className="btn-inline" data-filter="*" data-hover="All">All</button></li>
                            <li><button className="btn-inline" data-filter=".cat-1">UX/UI</button></li>
                            <li><button className="btn-inline" data-filter=".cat-2">HTML</button></li>
                            <li><button className="btn-inline" data-filter=".cat-3">WordPress</button></li>
                            <li><button className="btn-inline" data-filter=".cat-4">Branding</button></li>
                            <li><button className="btn-inline" data-filter=".cat-5">Photoshop</button></li>
                        </ul>
                    </div> 
                    */}
          {/* Filter Nav END */}

          {/* GALLERY CONTENT START */}
          <ul className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled m-b0">
            {galleryItems.map((item) => (
              <li
                key={item.id}
                className={`masonry-item ${item.cat} col-lg-4 col-md-6 col-sm-6 m-b30`}
              >
                <div className="sx-gallery-block">
                  <div className="sx-gallery-media sx-img-overlay">
                    <Link href="/portfolio/detail">
                      <Image
                        src={`/assets/images/gallery/${item.img}`}
                        alt={`Gallery ${item.id}`}
                        width={600}
                        height={400}
                      />
                    </Link>
                    <a
                      href={publicUrlFor(`images/gallery/${item.img}`)}
                      className="sx-gallery-link elem"
                      data-lcl-txt="Regulatory Compliance System"
                      data-lcl-author="someone"
                      data-lcl-thumb={publicUrlFor(
                        `images/gallery/${item.thumb}`
                      )}
                      onClick={(e) => {
                        e.preventDefault(); // prevent default page jump
                        if (window.lightcase) {
                          window.lightcase.start({
                            href: publicUrlFor(`images/gallery/${item.img}`),
                            type: "image",
                            title: "Regulatory Compliance System",
                            thumbnail: publicUrlFor(
                              `images/gallery/${item.thumb}`
                            ),
                          });
                        }
                      }}
                    >
                      <FaArrowUpRightFromSquare size={18} />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* GALLERY CONTENT END */}

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
    </>
  );
}

export default GalleryPage;
