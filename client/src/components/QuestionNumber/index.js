import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionNumber({ currQuestion, numOfQuestions }) {
  const navigate = useNavigate()
  
  if (currQuestion > numOfQuestions) {
    return navigate("/results")
  }
  return (
    <div className="question-number">
      Question {currQuestion} of {numOfQuestions}
    </div>
  );
}
