import React from "react";
import spinner from "../img/spinner.mov.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="loading"
    ></img>
  );
}

export default Spinner;
