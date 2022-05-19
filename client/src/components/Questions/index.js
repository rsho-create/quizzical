// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { questions } from "../../reducers/questionsSlice";

// const Questions = () => {

//   // All four answers in an array
//   let answersArray = allQuestions[currentQuestion].incorrect_answers.concat(
//     allQuestions[currentQuestion].correct_answer
//   );
//   console.log(answersArray);

//   // Shuffle the answers in the above array
//   answersArray = answersArray.sort(() => Math.random() - 0.5);
//   console.log(answersArray);

//   function renderAnswers() {
//     return answersArray.map((a, i) => {
//       <div className="answer${i+1}" onClick={answerClick}>
//         {a}
//       </div>;
//     });
//   }

//   return (
//     <>
//       <div className="question">
//         {allQuestions.length === 0 ? (
//           <h1>Loading...</h1>
//         ) : (
//           allQuestions[currentQuestion].question
//         )}
//       </div>

//       <div className="answers-container">{renderAnswers()}</div>
//     </>
//   );
// };

// export default Questions;
