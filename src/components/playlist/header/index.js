import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./header.css";
import NavButtons from "../../atoms/navButtons";

function index() {
  return (
    <div className="header">
      <NavButtons />
      <div className="header-right">
        <button>Upgrade</button>
        <button>Sreenath</button>
      </div>
    </div>
  );
}

export default index;
