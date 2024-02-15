import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./VideoComponent.module.scss";

const VideoComponent = () => {
  const videos = useSelector((state) => state.allVideos.videos);
  const renderList = videos.slice(0, -1)?.map((video_) => {
    const { _id, name, instructorName, duration, level, photo } = video_;

    return (
      <div key={_id} className={classes.card}>
        <Link to={`/video/${_id}`}>
          <div className={classes.video}>
            <img src={photo} alt={name} />
          </div>
          <div className={classes.content}>
            <div className={classes.name}>{name}</div>
            <div className={classes.instructorName}>{instructorName}</div>
            <div className={classes.duration_level}>
              {duration} · Level: {level}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className={classes.videoCards}>{renderList}</div>;
};

export default VideoComponent;
