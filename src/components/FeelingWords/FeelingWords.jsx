import React from "react";
import classes from "./FeelingWords.module.scss";

const FeelingWords = () => {
  return (
    <div className={classes.feelingWords}>
      <p>Discover a practice that makes you</p>
      <h2 className={classes.firstSentence}>stronger calmer lighter</h2>
      <h2 className={classes.secondSentence}>balanced focused patient</h2>
      <h2 className={classes.sentenceWithInterpoint}>
        s · p · a · c · i · o · u · s
      </h2>
    </div>
  );
};

export default FeelingWords;
