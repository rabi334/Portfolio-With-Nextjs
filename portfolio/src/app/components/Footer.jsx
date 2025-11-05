import style from "./Footer.module.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={style.outerDiv}>
      <div className={style.nextDiv}>
        <div className={style.innerDiv}>
          <div className={style.compDiv}>
            <h3 className={style.h3}>Rabira</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in the Ethiopia, specializing in web 
              and <br /> software development.
            </p>
          </div>
          <div className={style.compDiv2}>
            <form className={style.form}>
              <input
                className={style.input}
                type="email"
                placeholder="Your Email"
              />
              <button type="submit" className={style.button}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className={style.innerDiv2}>
          <p className="text-gray-400">
            {new Date().getFullYear()} Rabira. All rights reserved.
          </p>
          <div className={style.iconsDiv}>
            <Link href="" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </Link>
            <Link href="" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </Link>
            <Link href="" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/rabi334" className="text-gray-400 hover:text-white" target="_blank">
              <FaGithub />
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
