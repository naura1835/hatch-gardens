import React from "react";

import QnA from "../../component/question-and-answer/question-and-answer.component";
import { faqsData } from "../../data/faqsData";

import { Wrapper, Title } from "./faqs.styles";

const FaqsPage = () => {
  console.log("georgia");
  return (
    <Wrapper>
      <Title>FAQs</Title>
      {faqsData.map(({ id, ...otherProps }) => (
        <QnA key={id} {...otherProps} />
      ))}
    </Wrapper>
  );
};
export default FaqsPage;
