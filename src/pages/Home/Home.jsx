import React from "react";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={classes.home}>
      <div className={classes.text}>
        <h3>Taking care of your mind, body and soul.</h3>
        <p className={classes.about}>
          Familiarize yourself with our studio and course offering by signing up
          for a complimentary drop-in class now.
        </p>
        <p className={classes.book}>Book a class</p>
      </div>
    </div>
  );
};

export default Home;
