import Layout from "@/src/layout/Layout";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function thanks() {
  const [name, setName] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    setName(localStorage.getItem("formName"));
    setId(localStorage.getItem("formId"));
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout footer={2}>
      <div>
        <div
          className="slider-item"
          style={{
            backgroundImage: "url(assets/images/slider/slide1.jpg)",
          }}
        >
          <div className="container">
            <div className="slide-content">
              <span className="sub-title">Form Id: {id}</span>
              <h2>
                <span>Hey {name},</span>
                <br /> Thanks for your interest in our services.
              </h2>
              <hr />
              <div className="ratting-btns">
                <a href="contact.html" className="theme-btn style-two">
                  We will get back to you as soon as possible.{" "}
                </a>
                <a className="read-more" href="/about">
                  About us <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default thanks;
