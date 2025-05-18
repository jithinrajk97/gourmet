"use client"
import Image from "next/image";
import style from "./HomeAnim.module.scss";
import { useHomeAnim } from "./useHomeAnim";


const HomeAnim = ({ data }) => {
	const { main } = useHomeAnim({ style });
	const text = "Top 1% teachers selected by an industry-leading 4-step teacher assessment process by top 1% of early childhood coding experts"
	const words = text && text.split(' ');

	return (
		<section className={`${style.section} d-flex align-items-center  sec-padding`} ref={main} >
			<div className="position-absolute bottom-0 start-50 translate-middle-x col-lg-4 position-relative">
				<div className={`${style.tab_card_item} ${style.tab_card_item__one} d-inline-block`}>
					<div className={`d-inline-block rounded-4 w-50 mb-2`}>
						<div className="ratio ratio-1x1">
							<Image src={`/assets/images/icons/icon-color-1.png`} fill alt="logo" />
						</div>
					</div>
					<h6 className="fw-500 lh-1">Telephic Round</h6>
					<p className="mb-0 lh-1 fw-500">27 Test</p>
				</div>

				<div className={`${style.tab_card_item} ${style.tab_card_item__two} d-inline-block`}>
					<div className={`d-inline-block rounded-4 w-50 mb-2`}>
						<div className="ratio ratio-1x1">
							<Image src={`/assets/images/icons/icon-color-1.png`} fill alt="logo" />
						</div>
					</div>
					<h6 className="fw-500 lh-1">Live Demo Class</h6>
					<p className="mb-0 lh-1 fw-500">27 Test</p>
				</div>


				<div className={`${style.tab_card_item} ${style.tab_card_item__three} d-inline-block`}>
					<div className={`d-inline-block rounded-4 w-50 mb-2`}>
						<div className="ratio ratio-1x1">
							<Image src={`/assets/images/icons/icon-color-1.png`} fill alt="logo" />
						</div>
					</div>
					<h6 className=" fw-500 lh-1">Tech Check</h6>
					<p className="mb-0 lh-1 fw-500">27 Test</p>
				</div>


				<div className={`${style.tab_card_item} ${style.tab_card_item__four} d-inline-block`}>
					<div className={`d-inline-block rounded-4 w-50 mb-2`}>
						<div className="ratio ratio-1x1">
							<Image src={`/assets/images/icons/icon-color-1.png`} fill alt="logo" />
						</div>
					</div>
					<h6 className="fw-500 lh-1">Training & Certification</h6>
					<p className="mb-0 lh-1 fw-500">27 Test</p>
				</div>




				<div className={`ratio ${style.img}`}>
					<Image src={`/assets/images/man.png`} fill alt="logo" />
					<div>

					</div>
				</div>
			</div>
			<div className="container">
				<div className="col-lg-8 px-4 px-md-3 mx-auto">
					<h2 className={`text-center mb-0 ${style.title} fw-300`}>
						{words && words.map((word, index) => (
							<span key={index}>
								{word}{' '}
							</span>
						))}
					</h2>
				</div>
			</div>
		</section>
	);
};

export default HomeAnim;
