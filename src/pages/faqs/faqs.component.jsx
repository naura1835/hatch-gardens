import React, { useEffect } from "react";

import QnA from "../../component/question-and-answer/question-and-answer.component";
import { faqsData } from "../../data/faqsData";

import { Wrapper, Title } from "./faqs.styles";

const FaqsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
