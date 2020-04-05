import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, handlePayment } from "./actions/index";
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import NewSurvey from "./components/newSurvey";

const Surveys = () => <h1>Surveys</h1>;

function App({ fetchUser, auth, handlePayment }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  console.log(auth);
  return (
    <div className="App">
      <BrowserRouter>
        <Header userInfo={auth} handlePayment={handlePayment} />

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/surveys" component={Surveys} />
        <Route exact path="/surveys/new" component={NewSurvey} />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { fetchUser, handlePayment })(App);
