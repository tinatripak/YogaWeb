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

const VideoDetails = () => {
  const { videoId } = useParams();
  let video_ = useSelector((state) => state.video);
  const navigate = useNavigate();
  const [isLoadedDetails, setIsLoadedDetails] = useState(false);
  const [isLoadedInstructor, setIsLoadedInstructor] = useState(false);
  const { name, instructorId, instructorName, duration, level, video } = video_;
  const dispatch = useDispatch();

  const fetchVideoDetail = async (videoId) => {
    const response = await axios
      .get(`http://localhost:4000/video/getVideoById/${videoId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    const instructorResponse = await axios
      .get(`http://localhost:4000/instructor/getInstructorById/${instructorId}`)
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
        <>
          <div className="buttons">
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack size={30} /> Back
            </button>
          </div>
          <div
            className="ui container"
            style={{ marginTop: "1vh", paddingTop: "6vh" }}
          >
            {Object.keys(video_).length === 0 ? (
              <div>...Loading</div>
            ) : (
              <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider"></div>
                  <div className="middle aligned row">
                    <div className="column lp ">
                      <iframe
                        width="100%"
                        height="300vh"
                        src={video}
                        title="YouTube video player"
                      ></iframe>
                    </div>
                    <div className="column rp">
                      <h1>{name}</h1>
                      <h2>
                        <a className="ui teal label">{duration}</a>
                      </h2>
                      <h3 className="ui brown block ">Level: {level}</h3>
                      <p>{instructorName}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      }
    />
  );
};

export default VideoDetails;
