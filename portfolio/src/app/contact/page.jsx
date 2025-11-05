import style from "./Contact.module.css"
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
export default function Contact() {
    return (
        <div className={style.outerDiv} id="contact">
      <div className={style.nextDiv}>
        <h1 className={style.h1}>Contact</h1>
        <div className={style.innerDiv}>
          <div className={style.container}>
            <h3 className={style.h3}>Let's Talk</h3>
            <p className="mb-8">
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className={style.compDiv}>
              <FaEnvelope className={style.icons}></FaEnvelope>
              <a href="mailto:rabiraasefa541@gmail.com"
                className="hover:underline">
                rabiraasefa541@gmail.com
              </a>
            </div>
            <div className={style.compDiv}>
              <FaPhone className={style.icons}></FaPhone>
              <span>+251983296887</span>
            </div>
            <div className={style.compDiv}>
              <FaMapMarkedAlt className={style.icons}></FaMapMarkedAlt>
              <span>Addis Ababa , Ethiopia.</span>
            </div>
          </div>
          <div className={style.container2}>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className={style.label}>Your Name</label>
                <input type="text" className={ style.input} placeholder="Enter Your Name"/>
              </div>
              <div>
                <label htmlFor="name" className={style.label}>Your Name</label>
                <input type="text" className={ style.input} placeholder="Enter Your Email"/>
              </div>
              <div>
                <label htmlFor="name" className={style.label}>Message</label>
                <textarea type="text" className={ style.input} placeholder="Enter Your Message"/>
              </div>
              <button className={style.sendButton}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}