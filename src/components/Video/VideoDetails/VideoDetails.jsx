import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedVideo,
  removeSelectedVideo,
} from "../../../redux/actions/productsActions";
import { IoIosArrowBack } from "react-icons/io";
import ConditionalRender from "../../ConditionalRender/ConditionalRender";
import classes from "./VideoDetails.module.scss";
import Header from "../../Header/Header";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const VideoDetails = () => {
  const { videoId } = useParams();
  let video_ = useSelector((state) => state.video);
  const navigate = useNavigate();
  const [isLoadedDetails, setIsLoadedDetails] = useState(false);
  const [isLoadedInstructor, setIsLoadedInstructor] = useState(false);
  const { name, instructorId, instructorName, duration, level, video } = video_;
  console.log(video_);
  const dispatch = useDispatch();

  const fetchVideoDetail = async (videoId) => {
    const response = await axios
      .get(`https://yoga-redux.onrender.com/video/getVideoById/${videoId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    const instructorResponse = await axios
      .get(
        `https://yoga-redux.onrender.com/instructor/getInstructorById/${instructorId}`
      )
      .catch((err) => {
        console.log("Err: ", err);
      });
    const instructorData = instructorResponse?.data?.data;

    const videoWithInstructor = {
      ...response?.data?.data,
      instructorName: instructorData?.name,
    };
    dispatch(selectedVideo(videoWithInstructor));
    setIsLoadedInstructor(true);
    setIsLoadedDetails(true);
  };

  useEffect(() => {
    if (videoId && videoId !== "") fetchVideoDetail(videoId);
    return () => {
      dispatch(removeSelectedVideo());
    };
  }, [videoId]);
  return (
    <ConditionalRender
      conditions={[isLoadedInstructor, isLoadedDetails]}
      content={
        <div className={classes.videoMaterials}>
          <div className={classes.backAndDetails}>
            <div className={classes.buttons}>
              <a href="https://yoga-namaste.vercel.app/">
                <IoArrowBackCircleOutline size={50} />
              </a>
            </div>
            <div className={classes.details}>
              <div className={classes.video}>
                <iframe src={video} title="YouTube video player"></iframe>
              </div>
              <div className={classes.descriptionToVideo}>
                <p className={classes.name}>{name}</p>
                <p className={classes.duration}>Duration: {duration}</p>
                <p className={classes.level}>Level: {level}</p>
                <p className={classes.instructor}>
                  Instructor: {instructorName}
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default VideoDetails;
