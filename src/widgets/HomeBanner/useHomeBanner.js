import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.config({ force3D: true });
export const useHomeBanner = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const wrap = self.selector(`.${style.wrap}`)

      gsap.set(wrap, { 
        autoAlpha: 0, 
        y: 30, 
        filter: "blur(0px)", 
        transform: "translate3d(0px, 0px, 0px)" 
      })

      const tl = gsap.timeline({ repeat: 0, paused: true });
      tl.to(wrap, { 
        autoAlpha: 1, 
        y: 0,
        filter: "blur(0px)",
        transform: "translate3d(0px, 0px, 0px)",
        ease: Expo.easeOut, 
        duration: 1 
      })
        .play(0);

      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          // Desktop animations removed
        },

        "(min-width: 600px) and (max-width: 959px)": function () {
          // Tablet animations removed
        },

        "(max-width: 599px)": function () {
          // Mobile animations removed
        },

        "all": function () {
          // All screen sizes animations removed
        }
      });

    }, main);

    return () => {
      ctx.revert();
    };
  }, [style]);

  return {
    main,
  };
};
