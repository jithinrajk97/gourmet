import Link from "next/link";
import style from "./Footer.module.scss";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Subscribe from "./Subscribe";

function Footer() {
  return (
    <footer className={`${style.footer} bg-black `}>
      <div className="container">
        <div className={`d-lg-flex justify-content-lg-center align-items-center pb-4 gap-5 ${style.footer_top}`}>
          <div className="text-white d-lg-flex gap-5">
            <Link href={`/`}>
              HOME
            </Link>
            <Link href={`#aboutus`}>ABOUT US</Link>
            <Link href={`#ourproducts`}>OUR PRODUCTS</Link>
            <Link href={`#faq`}>FAQ</Link>
            <Link href={`#contactus`}>CONTACT US</Link>
          </div>

          <div className="d-flex mt-lg-0 mt-4 social">
            <Link href={``}>
              <LiaFacebookF color="#fff" size={22} />
            </Link>
            <Link href={``}>
              <FaTwitter color="#fff" size={22} />
            </Link>

            <Link href={`#`}>
              <FaInstagram color="#fff" size={22} />
            </Link>
          </div>
        </div>
        <div className={style.footer_bottom}>
            <p className="mb-0 text-white"> 2025 VCG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const data = [
  {
    label: "Home",
    url: "#",
  },
  {
    label: "What we offer",
    url: "#whatweoffer",
  },
  {
    label: "Our programs",
    url: "#ourprograms",
  },
  {
    label: "About us",
    url: "#aboutus",
  },
  {
    label: "Why choose us",
    url: "#whychooseus",
  },
  // {
  //     label: "Testimonials",
  //     url: "#testimonials"
  // },
];
