import { Expo, gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

gsap.config({ force3D: true });
export const useHomeInfo = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const [active, setActive] = useState(0)

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  const customSettings = {
    spaceBetween: 0,
    effect: 'fade',
    pagination: pagination,
    loop: true,
    autoplay: true,
    modules: [EffectFade, Navigation, Pagination, Autoplay],
    onSlideChange: ((e) => setActive(e.realIndex))
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const fade = self.selector(`.${style.fade}`);
      const almond1 = self.selector(`.${style.almond}`);
      const almond2 = self.selector(`.${style.almond1}`);
      const almond3 = self.selector(`.${style.almond2}`);
      const choco = self.selector(`.${style.dfsd}`);
      gsap.set(fade, { autoAlpha: 0, y: 100 })
      gsap.set(almond2, { filter:"blur(10px)" })
      gsap.set(almond3, { filter:"blur(10px)" })
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


      let tl1 = gsap
      .timeline({
        force3d: true,
        scrollTrigger: {
          trigger:almond1,
          scrub: 1,
          end:"500%"
        },
      })
      tl1.to(almond1, { autoAlpha: 1, y: 40, ease: Expo.easeOut },0)
      tl1.to(almond2, { autoAlpha: 1, y: 80, ease: Expo.easeOut },"<")
      tl1.to(almond3, { autoAlpha: 1, y: -40, ease: Expo.easeOut },"<")



      let tl2= gsap
      .timeline({
        force3d: true,
        scrollTrigger: {
          trigger:choco,
          scrub: 1,
          markers:false,
          end:"500%"
        },
      })
      tl2.to(choco, { autoAlpha: 1, y: 40, ease: Expo.easeOut },0)



    
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
    main,
    active,
    customSettings,
    pagination,
    setActive
  };
};
