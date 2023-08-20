import LoaderDiv from "@/src/components/LoaderDiv";
import { db } from "@/src/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
const SideBar = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loader, setLoader] = useState(false);
  const collRef = collection(db, "form-three");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(name, email, message);
    const docRef = await addDoc(collRef, {
      name,
      email,
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
  return (
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        {loader && <LoaderDiv />}
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document
                  .querySelector("body")
                  .classList.remove("side-content-visible");
                formSubmitHandler(e);
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Message"
                  rows={5}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
