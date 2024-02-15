import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlans } from "../../../redux/actions/productsActions";
import axios from "axios";
import ConditionalRender from "../../ConditionalRender/ConditionalRender";
import PlanComponent from "../PlanComponent/PlanComponent";

const PlanPage = () => {
  useSelector((state) => state.allPlans.plans);
  const dispatch = useDispatch();
  const [isLoadedPlan, setIsLoadedPlan] = useState(false);

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:4000/plan/getPlans")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setPlans(response.data.data));
    setIsLoadedPlan(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ConditionalRender
      conditions={[isLoadedPlan]}
      content={<PlanComponent />}
    />
  );
};

export default PlanPage;
