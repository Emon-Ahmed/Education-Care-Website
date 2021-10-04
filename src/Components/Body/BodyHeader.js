import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export default function BodyHeader() {
  const arrow = <FontAwesomeIcon icon={faLongArrowAltRight} />;
  return (
    <div className="body-header">
      <div className="body-header-text">
        <h1>
          Learn Anything <br /> Anytime <br /> Anywhere
        </h1>
        <button>
          Buy All <span>{arrow}</span>{" "}
        </button>
      </div>
      <div className="body-header-img">
        <img src="header.png" alt="" />
      </div>
    </div>
  );
}
