import React from "react";

import { Wrapper, Question, Answer } from "./question-and-answer.styles";

const QnA = ({ question, answer }) => (
  <Wrapper>
    <Question>{question}</Question>
    <Answer dangerouslySetInnerHTML={{ __html: answer }} />
  </Wrapper>
);

export default QnA;
