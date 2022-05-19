import React, { useEffect, useState, useRef } from "react";
import { Navbar, Timer } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { QuestionNumber } from "../../components";
import {
  roundCount,
  questionCount,
  incrementRound,
  incrementQuestion,
  setScores,
  setQuestionCount,
  setIsRoundOver,
  gameInfo
} from "../../reducers/gameSlice";
import { questions } from "../../reducers/questionsSlice";

const GamePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [timer, setTimer] = useState(-1);
  const [answers, setAnswers] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // redux stuff
  const questionsStatus = useSelector(state => state.questions.status);
  const formInfo = useSelector(gameInfo);

  console.log(formInfo)

  useEffect(() => {
    if (questionsStatus === "loading") {
      <Box mt={20}>
        <CircularProgress size={150} />
      </Box>
    }

    if (questionsStatus === "failed") {
        <Typography variant="h6" mt={20} color="red">
          Technical Difficulties! Refresh the Page and Take a Shot!
        </Typography>
    };

    if (questionsStatus === "fulfilled") {
      setAnswers([allQuestions.correct_answer, ...allQuestions.incorrect_answers])
      console.log(answers)
    };


  }, [questionsStatus]);

  function answerClick(e) {
    if (currentQuestion > allQuestions.length ) {
      navigate("/results")
    }
    setCurrentQuestion(prev => prev + 1)
    console.log(currentQuestion)
    console.log(allQuestions.length)
  }
  // round
  const currRoundCount = useSelector(roundCount);
  const roundSettings = useSelector((state) => state.game.roundSettings);

  // all questions
  const allQuestions = useSelector(questions);

  

  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return (
    <>
      <Navbar />
      <div className="timer">
        <div className="remaining-time-line">.</div>
        <div className="remaining-time-text">0:29</div>
      </div>
      <div className="game-container">
        <div className="players">
          <div className="player1">
            Player1
            <div className="player1-score">Score: 2</div>
          </div>
          <div className="player2 active-player">
            Player2
            <div className="player2-score">Score: 1</div>
          </div>
        </div>

        <QuestionNumber
        currQuestion={ currentQuestion }
        numOfQuestions={formInfo.numOfQuestions}
      />

        <div className="question">{allQuestions.length === 0 ? <h1>Loading...</h1> : allQuestions[currentQuestion ].question}</div>


        <div className="answers-container">
          <div className="answer1" onClick={answerClick}>A</div>
          <div className="answer2">B</div>
          <div className="answer3">C</div>
          <div className="answer4">D</div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
