import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";

function Header({ userInfo, handlePayment }) {
  const onToken = (token) => {
    console.log(token);
    handlePayment(token);
  };

  const renderLogAction = () => {
    if (userInfo === null) return "Loading...";
    if (userInfo === false) return <a href="/auth/github">Authenticate</a>;

    if (userInfo)
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <StripeCheckout
            token={onToken}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
            amount={500}
            currency="USD"
          />
          <p style={{ margin: "0 10px" }}>Credits: {userInfo.credits}</p>
          <a href="/api/logout">{userInfo.name} (Logout)</a>
        </div>
      );
  };
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#ffd400",
        }}
      >
        <Link to="/">
          <h1>Emaily</h1>
        </Link>
        {renderLogAction()}
      </header>
    </div>
  );
}

export default Header;
