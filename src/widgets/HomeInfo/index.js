"use client";
import Slider from "@/components/Slider";
import style from "./HomeInfo.module.scss";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { Pagination } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHomeInfo } from "./useHomeInfo";

const HomeInfo = ({ id }) => {
  const [activePage, setActivePage] = useState(1);
  const { main } = useHomeInfo({ style });
  const chocolateRef = useRef(null);
  const almondRef = useRef(null);

  const itemsPerPage = 8;
  const products = [
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-4.png",
    },
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-2.png",
    },
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-3.png",
    },
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-4.png",
    },
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-4.png",
    },
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-2.png",
    },
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-3.png",
    },
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-4.png",
    },
  
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-4.png",
    },
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-2.png",
    },
    {
      name: "Carrot Cake",
      description: "Classic carrot cake with cream cheese frosting",
      image: "/assets/images/products/product-3.png",
    },
    {
      name: "Tiramisu",
      description: "Italian coffee-flavored dessert with mascarpone cream",
      image: "/assets/images/products/product-4.png",
    },
  
    {
      name: "HAZELNUT DOME ",
      description: "Milk chocolate shell with hazelnut filling Chocolate",
      image: "/assets/images/products/product-4.png",
    },
    {
      name: "Strawberry Tart",
      description: "Fresh strawberry tart with vanilla custard",
      image: "/assets/images/products/product-2.png",
    },
    {
      name: "Carrot Cake",
      description: "Classic carrot cake with cream cheese frosting",
      image: "/assets/images/products/product-3.png",
    },
    {
      name: "Tiramisu",
      description: "Italian coffee-flavored dessert with mascarpone cream",
      image: "/assets/images/products/product-4.png",
    },
  
  
  ];

  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => setActivePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <section
      className={`${style.section} overflow-hidden position-relative`}
      ref={main}
      id="ourproducts"
    >
      <div
        className={style.about_img1}
        style={{
          width: "100%",
          height: "268px",
          position: "relative",
          zIndex: 10,
          transform: "scale(1.1)",
        }}
      >
        <img
          src="/assets/images/bottom-curve.png"
          alt="about"
          style={{ objectFit: "contain", height: "auto", width: "100%" }}
        />
        <img
          src="/assets/images/about-end-1.png"
          alt="about"
          className="curve_img"
          style={{
            objectFit: "contain",
            height: "auto",
            width: "100%",
            position: "absolute",
            inset: 0,
            // opacity: "0%",
          }}
        />
      </div>
      <div className={style.almond}>
        <figure className="ratio">
          <Image
            src="/assets/images/almond1.png"
            alt="about"
            className={style.choco}
            fill
          />
        </figure>
      </div>

      <div className={style.almond1}>
        <figure className="ratio">
          <Image
            src="/assets/images/almond1.png"
            alt="about"
            className={style.choco}
            fill
          />
        </figure>
      </div>

      <div className={style.almond2}>
        <figure className="ratio">
          <Image
            src="/assets/images/almond1.png"
            alt="about"
            className={style.choco}
            fill
          />
        </figure>
      </div>
      <div className="d-flex align-items-center sec-padding">
        <div className="container">
          <div className="row mb-4 mt-5">
            <h1 className={`${style.fade} text-white text-center mb-2 fw-bold`}>
              Our Products
            </h1>
            <p className={`${style.fade} text-white text-center mb-4`}>
              Discover our sweet temptations
            </p>
          </div>
          <div className={`row gx-lg-3 gx-2 gy-lg-3 gy-2 ${style.fade} `}>
            {currentProducts.map((product, index) => (
              <div key={index} className="col-6 col-md-6 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-lg-12 d-flex justify-content-center">
              <Pagination>
                {/* <Pagination.First 
                onClick={() => setActivePage(1)}
                disabled={activePage === 1}
              /> */}
                {/* <Pagination.Prev 
                onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
                disabled={activePage === 1}
              /> */}
                {items}
                {/* <Pagination.Next 
                onClick={() => setActivePage(prev => Math.min(prev + 1, totalPages))}
                disabled={activePage === totalPages}
              /> */}
                {/* <Pagination.Last 
                onClick={() => setActivePage(totalPages)}
                disabled={activePage === totalPages}
              /> */}
              </Pagination>
            </div>
          </div>
        </div>
      </div>
      <div
        className={style.about_img}
        style={{
          width: "100%",
          height: "268px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className={style.dfsd}>
        <Image
          ref={chocolateRef}

          src="/assets/images/chocolate.png"
          alt="about"
          className={style.choco}
          width={136.66}
          height={98}
          style={{
            position: "absolute",
            top: 0,
            left: "4%",
            transform: "translateY(-100%)",
          }}
        />
        </div>
        <img
          src="/assets/images/top-curve.png"
          alt="about"
          style={{ objectFit: "contain", height: "auto", width: "100%" }}
        />
      </div>
    </section>
  );
};

export default HomeInfo;
