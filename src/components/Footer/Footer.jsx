import React from "react";
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";
import { Link } from "react-scroll";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <p className={classes.logoName}>Namaste</p>
        <p className={classes.creator}>
          Made by{" "}
          <a href="https://www.linkedin.com/in/kristina-tripak-967387222/">
            Kristina Tripak
          </a>
        </p>
      </div>
      <div className={classes.status}>
        <p>Online classes</p>
      </div>
      <div className={classes.listOfNav}>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500} spy={true}>
              About
            </Link>
          </li>
          <li>
            <Link to="plan" smooth={true} duration={500} spy={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link to="video" smooth={true} duration={500} spy={true}>
              Videos
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} spy={true}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.socialMedias}>
        <a href="https://www.instagram.com/ksishia/">
          <CiInstagram size={35} />
        </a>
        <a href="https://t.me/kseniatri">
          <PiTelegramLogoThin size={35} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
