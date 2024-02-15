import React from "react";
import classes from "./Plan.module.scss";
import PlanPage from "../../components/Plans/PlanPage/PlanPage";

const Plan = () => {
  return (
    <div id="plan" className={classes.plan}>
      <p className={classes.title}>Choose a practice plan</p>
      <PlanPage />
    </div>
  );
};

export default Plan;
