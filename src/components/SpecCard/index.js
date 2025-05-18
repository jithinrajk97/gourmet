import React, { useState } from 'react';
import style from "./SpecCard.module.scss"
import Image from 'next/image';

export default function SpecCard({ }) {

    return (
        <div className={` ${style.card}`} >
            <div className={`${style.card_head} d-flex align-items-center mb-3`}>
                <div className={`rounded-circle ${style.icon}`}></div>
                <h3 className={`lh-1 ps-3  mb-0 ${style.title} fw-500`}>24/7 Support </h3>
            </div>
            <div className={style.card_body}>
                <p className="title-md mb-0">
                    Expert instructor knowledgeable,, experienced and provides quality education and guidance.
                </p>
            </div>
        </div>
    );
}