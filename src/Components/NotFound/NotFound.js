import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <img width="480px" src="404.svg" alt="404" />
      <br />
      <Link to="/body">
        <button className="btn">HOME PAGE</button>
      </Link>
    </div>
  );
}
