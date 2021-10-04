import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function BodyHeader() {
    // FontAwesome Icon Declare 
  const arrow = <FontAwesomeIcon icon={faLongArrowAltRight} />;
  
  return (
    <div className="body-header">
      <div className="body-header-text">
        <h1>Learn Anything <br /> Anytime <br /> Anywhere</h1>
        <NavLink to="/courses"> <button>Buy Now <span>{arrow}</span></button></NavLink>
      </div>
      <div className="body-header-img">
        <img src="header.png" alt="" />
      </div>
    </div>
  );
}
