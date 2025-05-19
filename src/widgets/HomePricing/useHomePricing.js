import { Expo, gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.config({ force3D: true });
export const useHomePricing = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const fade = self.selector(`.${style.fade}`);
      gsap.set(fade, { autoAlpha: 0, y: 100 })

      let tl = gsap
      .timeline({
        force3d: true,
        scrollTrigger: {
          trigger: main.current,
          start: "top 80%",
          end: "bottom 60%",
          // scrub: 0.5,
        },
      })
      tl.to(fade, { autoAlpha: 1, y: 0, stagger: 0.13, duration: 1.5, ease: Expo.easeOut },)
      // tl.to(banner_bg, { maskSize: "100%", ease: Expo.easeOut, duration: 1.5 }, "<.5")
      // tl.to(banner_bg_img, { autoAlpha: 1, scale: 1, ease: Expo.easeOut, duration: 1.5 }, "<")
      // tl.to(stroke, { autoAlpha: 1, ease: Expo.easeOut, stagger: .1, duration: 1.5, xPercent: 0, scaleX: 1 }, "<.6")
      // tl.to(bg, { autoAlpha: 1 }, "<")
      // tl.to([card1, card2, card3], { autoAlpha: 1, y: 0, stagger: 0.2 }, "<.5")
      // tl.to(round_item, { autoAlpha: 1, x: 0, scale: 1, stagger: 0.2 }, "<.5")
      // tl.to(track_progress, { scaleX: 1, duration: 1 }, "<")
      //   .play(0);
    }, main);

    return () => {
      ctx.revert();
    };
  }, []);

  return {
    main
  };
};
