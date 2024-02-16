import React from "react";
import classes from "./Home.module.scss";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className={classes.home}>
      <div className={classes.text}>
        <h3>Taking care of your mind, body and soul.</h3>
        <p className={classes.about}>
          Familiarize yourself with our studio and course offering by signing up
          for a complimentary drop-in class now.
        </p>
        <p className={classes.book}>
          <Link to="contact" smooth={true} duration={500} spy={true}>
            Book a Class
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
