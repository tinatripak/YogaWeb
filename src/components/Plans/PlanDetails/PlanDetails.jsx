import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedPlan,
  selectedPlan,
} from "../../../redux/actions/productsActions";
import { IoIosArrowBack } from "react-icons/io";
import ConditionalRender from "../../ConditionalRender/ConditionalRender";
import classes from "./PlanDetails.module.scss";

const PlanDetails = () => {
  const { planId } = useParams();
  const plan = useSelector((state) => state.plan);
  console.log(plan);
  const navigate = useNavigate();
  const [isLoadedPlanDetails, setIsLoadedPlanDetails] = useState(false);
  const { name, photo, description, price } = plan;

  const dispatch = useDispatch();

  const fetchPlanDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:4000/plan/getPlanById/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedPlan(response.data.data));
    setIsLoadedPlanDetails(true);
  };

  useEffect(() => {
    if (planId && planId !== "") fetchPlanDetail(planId);
    setIsLoadedPlanDetails(true);

    return () => {
      dispatch(removeSelectedPlan());
    };
  }, [planId]);

  return (
    <ConditionalRender
      conditions={[isLoadedPlanDetails]}
      content={
        <div className={classes.planDetails}>
          <div className={classes.buttons}>
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack size={30} /> Back
            </button>
          </div>
          <div className={classes.planBlock}>
            {Object.keys(plan).length === 0 ? (
              <div>...Loading</div>
            ) : (
              <div className={classes.info}>
                <div className={classes.image}>
                  <img src={photo} alt={name} />
                </div>
                <div className={classes.text}>
                  <p className={classes.name}>{name}</p>
                  <p className={classes.description}>{description}</p>
                  <p className={classes.price}>{price}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      }
    />
  );
};

export default PlanDetails;
