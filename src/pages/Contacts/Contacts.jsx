import React from "react";
import FindOnInstagram from "../../components/FindOnInstagram/FindOnInstagram";
import classes from "./Contacts.module.scss";
import {
  PiTelegramLogoThin,
  PiWhatsappLogoThin,
  PiPhoneThin,
} from "react-icons/pi";
import { CiMail } from "react-icons/ci";

const Contacts = () => {
  return (
    <div className={classes.contacts} id="contact">
      <h1 className={classes.title}>Contact Us and Book A Class</h1>
      <p className={classes.description}>
        To book a class you need to contact with me. You can do it throught
        Instagram, Telegram, WhatsApp, email, phone and we will discuss all the
        details you want to know and we will find the best plan for you.
      </p>
      <div className={classes.socialMedia}>
        <div className={classes.telegram}>
          <PiTelegramLogoThin size={40} />
          <p className={classes.media}>Telegram</p>
          <p>@kseniatri</p>
          <a href="https://t.me/kseniatri">Contact</a>
        </div>
        <div className={classes.whatsapp}>
          <PiWhatsappLogoThin size={40} />
          <p className={classes.media}>WhatsApp</p>
          <p>+380953518578</p>
          <a href="https://api.whatsapp.com/send?phone=380953518578">Contact</a>
        </div>
        <div className={classes.email}>
          <CiMail size={40} />
          <p className={classes.media}>Email</p>
          <p>tinatripak2002@gmail.com</p>
          <a href="mailto: tinatripak2002@gmail.com">Contact</a>
        </div>
        <div className={classes.phone}>
          <PiPhoneThin size={40} />
          <p className={classes.media}>Phone</p>
          <p>+380953518578</p>
          <a href="tel:+380953518578">Contact</a>
        </div>
      </div>
      <FindOnInstagram />
    </div>
  );
};

export default Contacts;
