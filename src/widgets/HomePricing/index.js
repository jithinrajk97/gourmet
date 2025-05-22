"use client";
import Image from "next/image";
import style from "./HomePricing.module.scss";
import { useHomePricing } from "./useHomePricing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const HomePricing = ({ data }) => {
  const { main } = useHomePricing({ style });
  return (
    <section className={`${style.section} sec-padding pt-lg-0 pb-0`} ref={main}>
      <div className="container">
        <div className="col-lg-7 mx-auto text-center text-white">
          <h2 className={`${style.fade} h2 fw-bold mb-2`}>
            <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} className="text-white" target="_blank">
              Check out @vcg on Instagram
            </Link>
          </h2>
          <p className={`${style.fade} fw-400 mb-lg-5 mb-3`}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>

        <div className={`${style.fade}`}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2.6,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} target="_blank">
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/posts/Post-1.png"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} target="_blank">
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/posts/Post.png"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} target="_blank">
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/posts/Post-2.png"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} target="_blank">
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/posts/Post-3.png"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} target="_blank">
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/posts/Post-1.png"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} target="_blank">
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/posts/Post.png"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} target="_blank">
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/posts/Post-2.png"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} target="_blank">
                <div className={style.img}>
                  <figure className="mb-0 ratio">
                    <Image
                      src={"/assets/images/posts/Post-3.png"}
                      alt="post"
                      fill
                    />
                  </figure>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className={`${style.fade} row justify-content-center mt-lg-5 mt-4`}
        >
          <div className="col-auto">
            <Link href={`https://www.instagram.com/vcgourmetdubai?igsh=MW9reTF4MnB4bWtidA==`} className="btn btn-primary" target="_blank">Visit Our Instagram</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
