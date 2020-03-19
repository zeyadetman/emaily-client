import React from "react";

function Header({ userInfo }) {
  const renderLogAction = () => {
    if (userInfo === null) return { text: "loading", action: "#" };
    if (userInfo === false)
      return { text: "Authenticate", action: `/auth/github` };

    if (userInfo)
      return {
        text: `${userInfo.name} (Logout)`,
        action: `/api/logout`
      };
  };
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
        <a href={renderLogAction().action}>{renderLogAction().text}</a>
      </header>
    </div>
  );
}

export default Header;
