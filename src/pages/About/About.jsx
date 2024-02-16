import React, { useEffect, useState } from "react";
import classes from "./About.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setInstructor } from "../../redux/actions/productsActions";
import axios from "axios";
import ConditionalRender from "../../components/ConditionalRender/ConditionalRender";

const About = () => {
  const [isLoadedInstructor, setIsLoadedInstructor] = useState(false);
  const [instructor, setinstructor] = useState();

  const fetchInstructor = async () => {
    const response = await axios
      .get("https://yoga-redux.onrender.com/instructor/getInstructors")
      .catch((err) => {
        console.log("Err: ", err);
      });
    setinstructor(response.data.data);
    setIsLoadedInstructor(true);
  };

  useEffect(() => {
    fetchInstructor();
  }, []);

  return (
    <div id="about" className={classes.about}>
      <ConditionalRender
        conditions={[isLoadedInstructor]}
        content={
          <>
            <div className={classes.textBlock}>
              <p className={classes.aboutInstructor}>
                Meet your yoga and meditation expert who will help you extend
                your practice, fostering harmony within your body and spirit.
              </p>
              <p className={classes.name}>{instructor?.[0]?.name}</p>
              <p className={classes.type}>
                <i>{instructor?.[0]?.kindOfInstructor}</i>
              </p>
            </div>
            <div className={classes.imageBlock}>
              <img src={instructor?.[0]?.photo} alt="Instructor" />
            </div>
          </>
        }
      />
    </div>
  );
};

export default About;
