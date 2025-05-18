"use client"
import Image from "next/image";
import style from "./HomeBanner.module.scss";

import { useHomeBanner } from "./useHomeBanner";


const HomeBanner = ({ data }) => {
	const { main } = useHomeBanner({ style });

	return (
		<section className={`${style.section}  position-relative pb-4 pb-lg-4 pt-lg-3 d-flex align-items-center`} ref={main} >
			<div className="container">
				<div className="row align-items-center">
					<div className={`${style.wrap} col-lg-5`}>
						<h1 className={`${style.title} h1 text-white lh-1 mb-3 mb-lg-4 fw-500 ff-secondary`}>
						Sweetening Moments, <br /><strong className="fw-500">Crafting Memories</strong>
						</h1>
						<p className={`text-white ${style.subTitle}`}>Coming from the esteemed house of Vivaah Celebrations, VC Gourmet offers an unparalleled selection of premium delicacies. </p>
					    <button className={`${style.btn} btn btn-primary mt-3 ff-inter`}>View Products</button>
					</div>
					<div className="col-lg-7">
						<div className={style.img_wrap}>
							<div className="ratio">
								<Image src="/assets/images/banner/choco-banner.webp" alt="banner" fill />
							</div>
						</div>
						
					</div>
				</div>
			

			</div>
		</section>
	);
};

export default HomeBanner;


const faculties = {
	title: "",
	data: [
		{
			url: "/assets/images/p1.png",
			alt: ""
		}, {
			url: "/assets/images/p2.png",
			alt: ""
		}, {
			url: "/assets/images/p3.png",
			alt: ""
		}, {
			url: "/assets/images/p4.png",
			alt: ""
		},
	]
}