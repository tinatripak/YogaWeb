import React from "react";
import classes from "./About.module.scss";

const About = () => {
  return (
    <div id="about" className={classes.about}>
      <div className={classes.textBlock}>
        <p className={classes.aboutInstructor}>
          Meet your yoga and meditation expert who will help you extend your
          practice, fostering harmony within your body and spirit.
        </p>
        <p className={classes.name}>Kseniia Tripak</p>
        <p className={classes.type}>
          <i>Yoga instructor</i>
        </p>
      </div>
      <div className={classes.imageBlock}>
        <img src="/me.jpg" alt="Instructor" />
      </div>
    </div>
  );
};

export default About;
