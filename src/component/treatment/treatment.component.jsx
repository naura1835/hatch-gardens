import React from "react";

import { ReactComponent as Sun } from "../../assets/wb_sunny.svg";
import { ReactComponent as WaterDrop } from "../../assets/water-drop.svg";

import "./treatment.style.scss";

const Treatment = () => {
  return (
    <div className="treatment-group">
      <div className="item-wrapper">
        <div className="item">
          <Sun />
        </div>

        <div className="caption-wrapper">
          <span className="caption">Lots of Sunlight</span>
        </div>
      </div>
      <div className="item-wrapper">
        <div className="item">
          <WaterDrop />
        </div>

        <div className="caption-wrapper">
          <span className="caption">Once Daily</span>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
