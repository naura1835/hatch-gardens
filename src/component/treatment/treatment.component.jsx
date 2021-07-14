import React from "react";

// import "./treatment.style.scss";
import {
  TreatmentGroup,
  TreatmentWrapper,
  TreatmentOption,
  TreatmentImage,
  CaptionWrapper,
  Caption,
} from "./treatment.styles";

const Treatment = ({ treatment }) => {
  const treatmentData = [
    {
      img: "/assets/icons/treatment/wb_sunny.svg",
      caption: treatment.sunglight,
    },
    {
      img: "/assets/icons/treatment/water-drop.svg",
      caption: treatment.water,
    },
    {
      img: "/assets/icons/treatment/fluent_temperature-20-regular.svg",
      caption: treatment.temperature,
    },
    {
      img: "/assets/icons/treatment/whh_flowerpot.svg",
      caption: treatment.fertilizer,
    },
  ];
  return (
    <TreatmentGroup>
      {treatmentData.map((item, index) => (
        <TreatmentWrapper key={index}>
          <TreatmentOption>
            <TreatmentImage src={item.img} />
          </TreatmentOption>

          <CaptionWrapper>
            <Caption>{item.caption}</Caption>
          </CaptionWrapper>
        </TreatmentWrapper>
      ))}
    </TreatmentGroup>
  );
};

export default Treatment;
