import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import classes from "./PlanComponent.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

const PlanComponent = () => {
  const plans = useSelector((state) => state.allPlans.plans);
  const renderList = plans?.map((plan) => {
    const { _id, name, photo, description, price } = plan;

    return (
      <div key={_id} className={classes.card}>
        <div className={classes.image}>
          <img src={photo} alt="Unlimited Yoga (videos, materials)" />
        </div>
        <div className={classes.content}>
          <div className={classes.name}>{name}</div>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Slider {...settings}>{renderList}</Slider>
    </div>
  );
};

export default PlanComponent;
