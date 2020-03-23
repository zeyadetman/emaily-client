import { FETCH_USER } from "./types";
import Axios from "axios";

export const fetchUser = () => async dispatch => {
  try {
    const userRes = await Axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: userRes.data.user });
  } catch (err) {
    dispatch({ type: FETCH_USER, payload: false });
  }
};

export const handlePayment = token => async dispatch => {
  const paymentRes = await Axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: paymentRes.data });
};
