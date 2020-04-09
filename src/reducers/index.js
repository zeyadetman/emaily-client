import authReducer from "./authReducer";
import surveyReducer from "./surveyReducer";
import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  survey: surveyReducer,
  form: reducerForm,
});
