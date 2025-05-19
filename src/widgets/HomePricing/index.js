"use client";
import Image from "next/image";
import style from "./HomePricing.module.scss";
import { useHomePricing } from "./useHomePricing";

const HomePricing = ({ data }) => {
  const { main } = useHomePricing({ style });
  return (
    <section className={`${style.section} sec-padding`} ref={main}>
      <div className="container">
        <div className="col-lg-7 mx-auto text-center text-white">
          <h2 className={`${style.fade} h2 fw-bold mb-2`}>Check out @vcg on Instagram</h2>
          <p className={`${style.fade} fw-400 mb-lg-5 mb-3`}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>

        <div className={`${style.fade} row`}>
          <div className="col-lg-3">
            <div className={style.img}>
              <figure className="mb-0 ratio">
                <Image src={"/assets/images/posts/Post-1.png"} alt="post" fill />
              </figure>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={style.img}>
              <figure className="mb-0 ratio">
                <Image src={"/assets/images/posts/Post.png"} alt="post" fill />
              </figure>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={style.img}>
              <figure className="mb-0 ratio">
                <Image src={"/assets/images/posts/Post-2.png"} alt="post" fill />
              </figure>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={style.img}>
              <figure className="mb-0 ratio">
                <Image src={"/assets/images/posts/Post-3.png"} alt="post" fill />
              </figure>
            </div>
          </div>
        </div>

		<div className={`${style.fade} row justify-content-center mt-lg-5 mt-4`}>
			<div className="col-auto">
					<button className="btn btn-primary">Visit Our Instagram</button>
			</div>
		</div>
      </div>
    </section>
  );
};

export default HomePricing;
