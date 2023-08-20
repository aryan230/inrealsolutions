import LoaderDiv from "@/src/components/LoaderDiv";
import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import { db } from "@/src/firebase";
import Layout from "@/src/layout/Layout";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const Faqs = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [message, setMessage] = useState();
  const [loader, setLoader] = useState(false);
  const collRef = collection(db, "form-two");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const docRef = await addDoc(collRef, {
      name,
      email,
      number,
      message,
    });
    window.setTimeout(() => {
      setLoader(false);
      localStorage.setItem("formId", docRef.id);
      localStorage.setItem("formName", name);
      router.push(`/thanks`);
      console.log("Document written with ID: ", docRef.id);
    }, 3000);
  };
  const accordionData = [
    {
      id: 1,
      title: "What services does your web development agency provide?",
      content:
        "We offer a wide range of services including website design, development, e-commerce solutions, mobile app development, custom web applications, content management systems (CMS), responsive design, SEO optimization, and ongoing maintenance to ensure your digital presence remains top-notch.",
    },
    {
      id: 2,
      title: "Do you offer mobile-responsive designs?",
      content:
        "Absolutely. All our designs are developed to be fully responsive, ensuring a seamless user experience across various devices and screen sizes.",
    },
    {
      id: 3,
      title: "What's the typical timeline for a web development project?",
      content:
        "Project timelines vary depending on the scope and complexity of the project. We'll provide you with a detailed project plan outlining milestones and estimated completion dates. Rest assured, we're committed to delivering high-quality results within reasonable timeframes.",
    },
    {
      id: 4,
      title: "Can you revamp our existing website?",
      content:
        "Certainly! We offer website redesign and enhancement services to modernize and optimize your current site, aligning it with the latest design trends and technologies.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout footer={2}>
      {loader && <LoaderDiv />}
      {/* Page Banner Start */}
      {/* <PageBanner pageName={"Faqs"} /> */}
      {/* Page Banner End */}
      {/* FAQ's Area start */}
      {/* <section className="faq-area pt-130 rpt-100 pb-130 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-5">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-two.jpg" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      key={data.id}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-shapes">
          <img
            className="shape left"
            src="assets/images/shapes/ellipse-left.png"
            alt="Shape"
          />
          <img
            className="shape right"
            src="assets/images/shapes/ellipse-right.png"
            alt="Shape"
          />
        </div>
      </section> */}
      {/* FAQ's Area end */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-130 rpt-100 pb-130 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-2">
              <div className="faq-iamge-part text-lg-end rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-three.png" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      key={data.id}
                      content={data.content}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Contact Form Area start */}
      <section className="contact-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title mb-50 text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work Together</span>
                <h2>Let’s Work Together For Your Nest Projects</h2>
              </div>
            </div>
            <div className="col-xl-10 col-lg-11">
              <form
                id="teamForm"
                className="form-style-one z-1 rel wow fadeInUp delay-0-3s"
                name="teamForm"
                onSubmit={formSubmitHandler}
              >
                <div className="row gap-60 pt-15">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <i className="far fa-phone" />
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-6 mb-50">
                    <div className="form-group">
                      <select name="select-subject" id="select-subject">
                        <option value="default" selected>
                          Subject
                        </option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="SEO">SEO</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="far fa-pencil" />
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Message"
                        required={""}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group pt-5 mb-0">
                      <button
                        type="submit"
                        className="theme-btn style-two w-100"
                      >
                        Send Message us <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Faqs;
