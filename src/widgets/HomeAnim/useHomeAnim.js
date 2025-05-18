import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeAnim = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const { width } = useGetDeviceType()
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const title = self.selector(`.${style.title}`);
      const img = self.selector(`.${style.img}`);
      const title_span = self.selector(`.${style.title} span`);
      const card = self.selector(`.${style.tab_card_item}`);
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {



        },

        "(min-width: 600px) and (max-width: 959px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
        },

        // small
        "(max-width: 599px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
        },

        // all 
        "all": function () {
          let tl = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5, end: "200%", pin: true } })
          // tl2.to(title_span, { autoAlpha: 1 })
          gsap.set(img, { autoAlpha: 0, yPercent: 20 });
          gsap.set(card[0], { autoAlpha: 0, xPercent: 20 });
          gsap.set(card[1], { autoAlpha: 0, xPercent: 20, yPercent: 20 });
          gsap.set(card[2], { autoAlpha: 0, xPercent: -20, yPercent: 20 });
          gsap.set(card[3], { autoAlpha: 0, xPercent: -20 });
          gsap.utils.toArray(title_span).forEach((card, index) => {
            const card_item = card.querySelector(`.${style.card_img1_img}`)
            gsap.set(card, { autoAlpha: 0.2 });
            tl.to(card, {
              autoAlpha: 1,
              stagger: 1,
            });
          });
          tl.to(main.current, { backgroundColor: "#DCF663", duration: 3 })
          tl.to(title, { autoAlpha: 0, yPercent: -10, duration: 3 }, "<");
          tl.to(img, { yPercent: 5, autoAlpha: 1, duration: 3 }, "<.8")
          tl.to(card, { autoAlpha: 1, stagger: 2, duration: 2, yPercent:0, xPercent: 0}, "<.8")

        }
      });

    }, main);

    return () => {
      ctx.revert();
    };
  }, [style, width]);

  return {
    main,
  };
};
