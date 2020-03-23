import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, handlePayment } from "./actions/index";
import Header from "./components/header";

const Surveys = () => <h1>Surveys</h1>;
const CreateSurvey = () => <h1>New Survey</h1>;

function App({ fetchUser, auth, handlePayment }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  console.log(auth);
  return (
    <div className="App">
      <BrowserRouter>
        <Header userInfo={auth} handlePayment={handlePayment} />
        <Route exact path="/surveys" component={Surveys} />
        <Route exact path="/surveys/new" component={CreateSurvey} />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps, { fetchUser, handlePayment })(App);
