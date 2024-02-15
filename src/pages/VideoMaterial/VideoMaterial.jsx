import React from "react";
import classes from "./VideoMaterial.module.scss";
import VideoPage from "../../components/Video/VideoPage/VideoPage";

const VideoMaterial = () => {
  return (
    <div id="video" className={classes.videos}>
      <h1>
        Whether you're looking to try a beginner-level class or gain unlimited
        access to our library, we've got options to flex with your unique
        practice goals
      </h1>
      <VideoPage />
      <div className={classes.moreVideos}>
        <h3>More videos</h3>
      </div>
    </div>
  );
};

export default VideoMaterial;
