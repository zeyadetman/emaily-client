import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reducerForm,
});
