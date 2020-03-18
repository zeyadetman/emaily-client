import React from "react";
import { API_BASE_URL } from "../utils";

function Home() {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#ffd400"
        }}
      >
        <h1>Emaily</h1>
        <a href={`${API_BASE_URL}/auth/github`}>Sign In</a>
      </header>
    </div>
  );
}

export default Home;
