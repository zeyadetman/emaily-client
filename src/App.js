import React from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route } from "react-router-dom";

const Surveys = () => <h1>Surveys</h1>;
const CreateSurvey = () => <h1>New Survey</h1>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/surveys" component={Surveys} />
        <Route exact path="/surveys/new" component={CreateSurvey} />
      </BrowserRouter>
    </div>
  );
}

export default App;
