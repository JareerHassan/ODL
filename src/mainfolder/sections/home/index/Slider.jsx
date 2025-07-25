import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  {
    img: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-home-slider-img2.jpg",
    title: "Web Solution",
    text: "Development",
  },
  {
    img: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-home-slider-img3.jpg",
    title: "Our Services",
    text: "Innovation",
  },
  {
    img: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-home-slider-img4.jpg",
    title: "Virtual reality",
    text: "Creativity",
  },
  {
    img: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-home-slider-img1.jpg",
    title: "Market Research",
    text: "Marketing",
  },
];

const Slider = () => {
  const swiperRef = useRef(null);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!swiperRef.current) return;
      const swiper = swiperRef.current.swiper;

      if (isForward) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isForward]);

  return (
    <div className="bg-black">
      <div className="bg-black px-2 py-3">
                <p className="fs-5 fw-bold text-center" style={{color:'#ff0055'}}>From Vision to Virtual.</p>

        <h2 className="ourmain-heading">Looking for the Best IT Solutions?</h2>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper.el;
          }}
          onReachEnd={() => setIsForward(false)}
          onReachBeginning={() => setIsForward(true)}
          slidesPerView={2.5}
          spaceBetween={10}
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="d-flex flex-column"
                style={{
                  width: "450px",
                  borderRight: "2px solid #ff0055",
                  paddingRight: "70px",
                }}
              >
                <div
                  className="position-relative shadow"
                  style={{
                    width: "100%",
                    height: "300px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      bottom: "20px",
                      left: "20px",
                      zIndex: 10,
                      color: "white",
                    }}
                  >
                    <h5
                      className="fw-semibold text-custom d-inline-block position-relative"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {slide.title}
                      <span
                        style={{
                          height: "2px",
                          backgroundColor: "white",
                          marginTop: "5px",
                          width: "0",
                          transition: "width 0.3s ease-in-out",
                        }}
                        className="hover-line d-block"
                      ></span>
                    </h5>
                    <p style={{ fontSize: "0.9rem" }}>{slide.text}</p>
                  </div>

                  <div
                    className="position-absolute"
                    style={{
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                      zIndex: 5,
                    }}
                  ></div>

                  <div
                    className="position-absolute"
                    style={{
                      top: 0,
                      bottom: 0,
                      right: "-5px",
                      width: "2px",
                      backgroundColor: "rgba(255,255,255,0.6)",
                      zIndex: 20,
                    }}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
