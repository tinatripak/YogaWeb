import React, { useEffect, useState } from "react";
import classes from "./FindOnInstagram.module.scss";
import axios from "axios";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const FindOnInstagram = () => {
  const [images, setImages] = useState([]);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 650);

  const updateScreenWidth = () => {
    setIsWideScreen(window.innerWidth > 650);
  };

  const getPhotos = () => {
    let token = process.env.REACT_APP_INSTAGRAM_TOKEN;
    let num_photos = 4;
    axios
      .get(
        "https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=" +
          token +
          "&count=" +
          num_photos
      )
      .then((res) => {
        setImages(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPhotos();
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className={classes.findMe}>
      <h2>Find me in Instagram </h2>
      {isWideScreen ? (
        <div className={classes.instagramImages}>
          <div className={classes.cards}>
            {images.slice(0, 4).map((image, index) => (
              <img
                key={index}
                src={image.media_url}
                alt={`Instagram post ${index}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={classes.instagramImagesSlider}>
          <Slide>
            {images.slice(0, 4).map((image, index) => (
              <div key={index}>
                <img src={image.media_url} alt={`Instagram post ${index}`} />
              </div>
            ))}
          </Slide>
        </div>
      )}
      <p className={classes.name}>@ksishia</p>
      <a href="https://www.instagram.com/ksishia/" className={classes.link}>
        Connect to my Instagram
      </a>
    </div>
  );
};

export default FindOnInstagram;
