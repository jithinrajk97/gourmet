"use client";
import Image from "next/image";
import style from "./Header.module.scss";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CartItems } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";
import { Modal } from "react-bootstrap";
import useHeader from "./useHeader";
import EnquireForm from "@/components/EnquireForm";
import { useState, useEffect } from "react";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Header() {
  let cartCount = useRecoilValue(CartItems);
  const {
    main,
    width,
    show,
    handleClose,
    handleShow,
    handleClose1,
    handleShow1,
    showOffcanvas,
  } = useHeader({ style });
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${style.header} fixed-top ${
        isScrolled ? style.header_scrolled : ""
      }`}
      ref={main}
    >
      <Navbar
        onSelect={(e) => {
          console.log(e, "logged");
        }}
        expand={"xl"}
        variant="light"
        className=""
      >
        <Container>
          <Link href="/" className="navbar-brand">
            <div className={`${style.logo} ratio `}>
              <Image
                src={`/assets/images/logo.svg`}
                priority={true}
                fill
                alt="logo"
              />
            </div>
          </Link>
          <Navbar.Toggle
            className={`border-0 px-0  ${style.header_toggle}`}
            onClick={handleShow1}
            aria-controls={`offcanvasNavbar-expand-xl`}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="start"
            show={showOffcanvas}
            onHide={handleClose1}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                <div className={`${style.logo} ratio `}>
                  <Image src={`/assets/images/logo.svg`} fill alt="logo icon" />
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto pe-xl-3 align-items-xl-center h-100">
                {data?.map((item, i) => {
                  return (
                    <div>
                      <Link
                        key={i}
                        href={`${item?.url}`}
                        className="nav-link text-uppercase"
                        onClick={handleClose1}
                      >{`${item?.label}`}</Link>
                    </div>
                  );
                })}

                <div className={`${style.social} mt-lg-0 mt-3`}>
                  <Link href={``}>
                    <LiaFacebookF color="#fff" size={20} />
                  </Link>
                  <Link href={``}>
                    <FaTwitter color="#fff" size={20} />
                  </Link>

                  <Link href={`#`}>
                    <FaInstagram color="#fff" size={20} />
                  </Link>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

const data = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About us",
    url: "#aboutus",
  },
  {
    label: "Our Products",
    url: "#ourproducts",
  },{
    label: "Our Clients",
    url: "/clients",
  },
  {
    label: "FAQ",
    url: "#faq",
  },
  {
    label: "Contact us",
    url: "#contactus",
  },
];
