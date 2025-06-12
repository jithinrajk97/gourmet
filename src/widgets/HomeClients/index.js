"use client";
import Image from "next/image";
import style from "./HomeClients.module.scss";
import { useHomeClients } from "./useHomeClients";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const HomeClients = ({ data }) => {
  const { main } = useHomeClients({ style });
  return (
    <section className={`${style.section} sec-padding pt-lg-5 pb-0`} ref={main}>
      <div className="container">
        {/* <div className="col-lg-7 mx-auto text-center text-white">
          <h2 className={`${style.fade} h2 fw-bold mb-2`}>
              Our Clients
          </h2>
          <p className={`${style.fade} fw-400 mb-lg-5 mb-3`}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div> */}

        <div className={`${style.fade}`}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/clients/1.jpeg"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/clients/2.jpeg"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/clients/3.jpeg"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/clients/4.jpeg"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/clients/5.jpeg"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/clients/6.jpeg"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>      
            </SwiperSlide>
     
          </Swiper>
        </div>

       
      </div>
    </section>
  );
};

export default HomeClients;
