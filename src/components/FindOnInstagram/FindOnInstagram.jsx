import React, { useEffect, useState } from "react";
import classes from "./FindOnInstagram.module.scss";
import axios from "axios";

const FindOnInstagram = () => {
  const [images, setImages] = useState();
  const getPhotos = () => {
    let token = process.env.REACT_APP_INSTAGRAM_TOKEN;
    console.log(process.env.REACT_APP_INSTAGRAM_TOKEN);
    let num_photos = 4;
    axios
      .get(
        "https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=" +
          token +
          "&count=" +
          num_photos
      )
      .then((res) => {
        console.log(res);
        setImages(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className={classes.findMe}>
      <h1>Find me in Instagram </h1>
      <div className={classes.instagramImages}>
        <div className={classes.cards}>
          {images?.slice(0, 4).map((image) => {
            return <img src={image?.media_url} />;
          })}
        </div>
        <p className={classes.name}>@ksishia</p>
      </div>

      <a href="https://www.instagram.com/ksishia/" className={classes.link}>
        Connect to my Instagram
      </a>
    </div>
  );
};

export default FindOnInstagram;
