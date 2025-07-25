"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
  "client-logo-1.png",
  "client-logo-2.png",
  "client-logo-3.png",
  "client-logo-4.png",
  "client-logo-5.png",
];

// Repeat logos to create a loop
const repeatedLogos = [...logos, ...logos];

function SectionClients1() {
  return (
    <div
      className="section-full p-t40 p-b40 sx-client-logo-2-outer"
      style={{ backgroundColor: "#ff0055" }}
    >
      <div className="container-fluid">
        <div className="section-content">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            }}
          >
            {repeatedLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Link href="/contact-us" className="client-logo-pic2 d-block">
                  <Image
                    src={`/assets/images/client-logo/white/${logo}`}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={80}
                    style={{ padding: "5px" }}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SectionClients1;
