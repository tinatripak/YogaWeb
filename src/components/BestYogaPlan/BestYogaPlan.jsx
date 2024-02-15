import React from "react";
import classes from "./BestYogaPlan.module.scss";

const BestYogaPlan = () => {
  return (
    <div className={classes.bestYogaWrap}>
      <img
        className={classes.background}
        src="https://drive.google.com/thumbnail?id=13Xp7uHVXDZUQj_xi6xp1uQ3yhU_R_z4s&sz=w1000"
        alt=""
      />
      <div className={classes.bestYogaContent}>
        <div className={classes.rightBlock}>
          <p className={classes.title}>
            Get unlimited access to each of these featured classes and more.
          </p>
        </div>
        <div className={classes.leftBlock}>
          <p className={classes.name}>Unlimited Yoga&Meditation</p>
          <p className={classes.description}>
            Improve your practice at your own pace
          </p>
          <p className={classes.price}>$15/month</p>
          <button>Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default BestYogaPlan;
