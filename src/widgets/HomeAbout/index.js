"use client";
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";
import SpecCard from "@/components/SpecCard";

const HomeAbout = ({ data }) => {
  const { main } = useHomeAbout({ style });

  return (
    <section
      className={`${style.section}  position-relative pt-lg-0 pb-0 sec-padding`}
      ref={main}
      id="aboutus"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className={style.section_content}>
              <h2 className={`${style.fade} h2 text-white fw-700 mb-4`}>ABOUT US </h2>
              <div className={style.box}></div>
              <div className={`${style.fade} ${style.img} d-lg-none d-block mb-3`}>
              <div className="ratio">
                <Image src="/assets/images/banner/about-new.webp" alt="about" fill />
              </div>
            </div>
              <div className="col-lg-10">
                <p className={`${style.fade}  text-white`}>
                  Coming from the esteemed house of Vivaah Celebrations, VC
                  Gourmet offers an unparalleled selection of premium
                  delicacies. With a passion for excellence and a dedication to
                  quality, we curate artisanal chocolates and gourmet treats
                  that elevate every occasion. From luxurious gift boxes to
                  bespoke indulgences, our creations promise to add a touch of
                  sophistication and sweetness to your most cherished moments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            <div className={`${style.fade} ${style.img}`}>
              <div className="ratio">
                <Image src="/assets/images/banner/about-new.webp" alt="about" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
