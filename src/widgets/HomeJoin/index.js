"use client";
import Image from "next/image";
import style from "./HomeJoin.module.scss";
import { Form, Button } from "react-bootstrap";
import { useHomejoin } from "./useHomeJoin";

const HomeJoin = ({ data }) => {
  const { main } = useHomejoin({ style });
  return (
    <section className={`${style.section} sec-padding`} ref={main}>
      <div className="container">
        <div className="col-lg-5 mx-auto text-center text-white">
          <h2 className={`${style.fade} h2 fw-bold mb-2`}>Contact With Us</h2>
          <p className={`${style.fade}  fw-400 mb-lg-5 mb-3`}>
            Reach out for any inquiries, support, or feedback. We're here to
            help! Provide your details, and we'll get back to you soon.
          </p>
        </div>

        <div className="contact-section">
          <div className="contact-info">
            <p className={`${style.fade} contact-info__item`}>+971 50-9733071</p>
            <p className={`${style.fade} contact-info__item`}>hello@vcgourmetdubai.com</p>
            <p className={`${style.fade} contact-info__item`}>www.vcgourmetdubai.com</p>
          </div>
          <div className={`${style.fade}  contact-form`}>
            <Form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <Form.Group controlId="name">
                    <Form.Label className="text-white ff-inter title-sm">
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name..."
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Group controlId="email">
                    <Form.Label className="text-white ff-inter title-sm">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your email address..."
                    />
                  </Form.Group>
                </div>
              </div>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label className="text-white ff-inter title-sm">
                  Messages
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your messages..."
                />
              </Form.Group>
              <div className="row">
                <div className="col-auto">
                  <Button variant="primary" type="submit" className="btn-sm py-2">
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeJoin;
