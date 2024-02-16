import React from "react";
import classes from "./Home.module.scss";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className={classes.home}>
      <div className={classes.text}>
        <p className={classes.title}>
          Nurture your mind, body, and soul through activities that promote
          growth, health, and inner peace.
        </p>
        <p className={classes.about}>
          Familiarize yourself with our paid courses and tons of free videos and
          find harmony between your body and mind.
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
