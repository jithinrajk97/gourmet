"use client";
import Image from "next/image";
import style from "./HomeApp.module.scss";
import { useHomeApp } from "./useHomeApp";

const HomeApp = ({ data }) => {
  const { main } = useHomeApp({ style });
  return (
    <section
      className={`${style.section} overflow-hidden d-flex align-items-center `}
      ref={main}
    >
      <div className="container">
        <div className="col-lg-7 mx-auto text-center text-white">
          <h2 className={`${style.fade} h2 fw-bold mb-2`}>FAQ</h2>
          <p className={` fw-400 mb-lg-5 mb-3 ${style.fade}`}>Frequently Asked Questions</p>
        </div>

        <div >
          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className={` h4 text-white`}>
                  Can your products be shipped worldwide?{" "}
                </h4>
                <p className={` title-md mb-0`}>
                  Yes, absolutely. With a minimum order quantity within a
                  reasonable timeframe, we are in the capacity to freshly
                  produce and send you our sweet temptations to you in special
                  packs.
                </p>
              </div>
            </div>
          </div>
          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">
                  Can your products be shipped worldwide?{" "}
                </h4>
                <p className="title-md mb-0">
                  Yes, absolutely. With a minimum order quantity within a
                  reasonable timeframe, we are in the capacity to freshly
                  produce and send you our sweet temptations to you in special
                  packs.
                </p>
              </div>
            </div>
          </div>
          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">
                  Can I order individual boxes or packs on retail?{" "}
                </h4>
                <p className="title-md mb-0">
                  While we would like to satisfy individual cravings, we are
                  currently offering our products for large orders at private
                  events, social events, corporate events, brand gifting,
                  government events and hampers of any kind.
                </p>
              </div>
            </div>
          </div>
          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">
                  Can I customize the boxes as per my order requirement?
                </h4>
                <p className="title-md mb-0">
                  Yes, absolutely! Our bespoke packaging allows you to customize
                  the boxes to your liking. With a wide choice of colours and
                  printing options, you can choose to have your brand logo,
                  customized text or event name mentioned on the boxes.
                </p>
              </div>
            </div>
          </div>

          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">
                  Can I customize the boxes as per my order requirement?
                </h4>
                <p className="title-md mb-0">
                  Yes, absolutely! Our bespoke packaging allows you to customize
                  the boxes to your liking. With a wide choice of colours and
                  printing options, you can choose to have your brand logo,
                  customized text or event name mentioned on the boxes.
                </p>
              </div>
            </div>
          </div>

          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">
                  Can I customize the boxes as per my order requirement?
                </h4>
                <p className="title-md mb-0">
                  Yes, absolutely! Our bespoke packaging allows you to customize
                  the boxes to your liking. With a wide choice of colours and
                  printing options, you can choose to have your brand logo,
                  customized text or event name mentioned on the boxes.
                </p>
              </div>
            </div>
          </div>

          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">
                  Can I customize the boxes as per my order requirement?
                </h4>
                <p className="title-md mb-0">
                  Yes, absolutely! Our bespoke packaging allows you to customize
                  the boxes to your liking. With a wide choice of colours and
                  printing options, you can choose to have your brand logo,
                  customized text or event name mentioned on the boxes.
                </p>
              </div>
            </div>
          </div>

          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">
                  Can I customize the contents as per my liking?
                </h4>
                <p className="title-md mb-0">
                  Our products are totally customizable to your liking with a
                  choice of different moulds, shapes, flavours, fillings and
                  customizable boxes. You can choose from our box of 9, 18, 24,
                  36 or 72 chocolates per box.
                </p>
              </div>
            </div>
          </div>

          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">
                  What’s the consumable period of your products?
                </h4>
                <p className="title-md mb-0">
                  Our sweet treats are made from the freshest and finest
                  ingredients which guarantees that you will enjoy the rich
                  flavors and premium quality in every bite. Our products are
                  prepared with all our heart, knowing that you may want to
                  share this joy with your loved ones over a long time to come.
                  Most of our products have a consumable life of several weeks,
                  if stored in suitable conditions.
                </p>
              </div>
            </div>
          </div>

          <div className={`row mb-4 ${style.fade} `}>
            <div className="col-auto">
              <div className={style.circle}></div>
            </div>
            <div className="col">
              <div className={style.content}>
                <h4 className="h4 text-white">How do I place my order?</h4>
                <p className="title-md mb-0">
                  We’re available on phone, email and social media. You may
                  choose to write to us by email, call us or fill in a form by
                  just clicking Contact Us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApp;
