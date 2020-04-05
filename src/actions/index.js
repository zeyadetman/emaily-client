import { FETCH_USER, CREATE_SURVEY } from "./types";
import Axios from "axios";
window.axios = Axios;
export const fetchUser = () => async (dispatch) => {
  try {
    const userRes = await Axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: userRes.data.user });
  } catch (err) {
    dispatch({ type: FETCH_USER, payload: false });
  }
};

export const handlePayment = (token) => async (dispatch) => {
  const paymentRes = await Axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: paymentRes.data });
};

export const addNewSurvey = (values, history) => async (dispatch) => {
  const res = await Axios.post("/api/surveys", values);
  if (res) history.push("/surveys");
  dispatch({ type: CREATE_SURVEY, payload: res.data });
};
