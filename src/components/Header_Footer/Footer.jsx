import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.my_footer}>
      <div className={styles.footer_container}>
        <div>
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <div className={styles.logo_container}>
              <img src={logo} className={styles.logo} alt="logo" width={45} />
              <p className={`fs-4 ${styles.logo_name}`}>
                Green <br /> Warriors
              </p>
            </div>
          </a>
        </div>

        <div>
          <div className={styles.footer_list_heading}>GET IN TOUCH</div>
          <ul>
            <li>
              <IoMail /> greenwarriors@gmail.com
            </li>
            <li>
              <IoMail /> green123@gmail.com
            </li>
            <li>
              <IoMail /> ecogreen232@krishna.in
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.footer_list_heading}>Connect With Us</div>
          <ul>
            <li>
              Instragram <FaInstagram className={styles.footer_icon} />
            </li>
            <li>
              Facebook <FaFacebook className={styles.footer_icon} />
            </li>
            <li>
              Twitter <FaTwitter className={styles.footer_icon} />
            </li>
            <li>
              YouTube <FaYoutube className={styles.footer_icon} />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className=" mb-0 text-center">© 2024 Green Warriors, Inc</p>
      <div className={styles.footer_icons}>
        <FaInstagram className={styles.footer_icon} />
        <FaFacebook className={styles.footer_icon} />
        <FaTwitter className={styles.footer_icon} />
      </div>
    </footer>
  );
};

export default Footer;
