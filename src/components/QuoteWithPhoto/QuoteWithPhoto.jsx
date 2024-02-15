import React from "react";
import classes from "./QuoteWithPhoto.module.scss";

const QuoteWithPhoto = () => {
  return (
    <div className={classes.quoteWithPhoto}>
      <div className={classes.text}>
        <p className={classes.quote}>
          "Yoga is the journey of the self, through the self, to the self."
        </p>
        <p className={classes.author}>— The Bhagavad Gita</p>
      </div>
    </div>
  );
};

export default QuoteWithPhoto;
