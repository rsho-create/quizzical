import React, { useEffect, useState, useRef } from "react";
import { Navbar, Timer } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {
  roundCount,
  questionCount,
  incrementRound,
  incrementQuestion,
  setScores,
  setQuestionCount,
  setIsRoundOver,
} from "../../reducers/gameSlice";
import { questions } from "../../reducers/questionsSlice";

const GamePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [timer, setTimer] = useState(-1);
  const [answers, setAnswers] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [numOfQuestions, setNumOfQuestions] = useState(1);
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);

  const categoryStatus = useSelector((state) => state.categories.status);
  const questionsStatus = useSelector((state) => state.questions.status);

  // fetching categories and loading form
  useEffect(() => {
    if (questionsStatus === "loading") {
      <Box mt={20}>
        <CircularProgress size={150} />
      </Box>;
    }

    if (questionsStatus === "failed") {
      <Typography variant="h6" mt={20} color="red">
        Technical Difficulties! Refresh the Page and Take a Shot!
      </Typography>;
    }

    if (questionsStatus === "fulfilled") {
      setAnswers([
        allQuestions.correct_answer,
        ...allQuestions.incorrect_answers,
      ]);
    }
  }, [categoryStatus, dispatch]);

  function answerClick(e) {
    if (player1) {
      setPlayer1(false);
      setPlayer2(true);
    } else {
      setPlayer1(true);
      setPlayer2(false);
    }

    let currentAnswer = e.target.innerHTML;
    if (currentQuestion > allQuestions.length) {
      navigate("/results");
    }

    setCurrentQuestion((prev) => prev + 1);

    // console.log(currentQuestion);
    // console.log(allQuestions.length);

    // Checking the answer & provide user feedback
    if (currentAnswer === allQuestions[currentQuestion].correct_answer) {
      return alert("CORRECT!");
      // Update the score if necessary
    } else {
      return alert("FAIL. DRINK UP!");
    }
  }
  // timer
  const currRoundCount = useSelector(roundCount);
  // settings for round

  const roundSettings = useSelector((state) => state.game.roundSettings);

  // all questions
  const allQuestions = useSelector(questions);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // timer
  useInterval(() => {
    if (timer > 0) setTimer(timer - 1);
    else if (timer === 0) {
      socket.emit("getCorrectAnswer", { roomId: id });
      setTimer(-1);
    }
  }, 1000);

  return (
    <>
      <Navbar />

      <div className="timer">
        <div className="remaining-time-line">.</div>
        <div className="remaining-time-text">0:29</div>
      </div>
      <div className="game-container">
        <div className="players">
          <div className={player1 ? "active-player player1" : "player1"}>
            Player1
            <div className="player1-score">Score: 2</div>
          </div>
          <div className={player2 ? "active-player player2" : "player2"}>
            Player2
            <div className="player2-score">Score: 1</div>
          </div>
        </div>

        <div className="question">
          {allQuestions.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            allQuestions[currentQuestion].question
          )}
        </div>

        <div className="answers-container">
          <div className="answer1" onClick={answerClick}>
            {allQuestions.length === 0 ? (
              <h1>Loading...</h1>
            ) : (
              allQuestions[currentQuestion].correct_answer
            )}
          </div>
          <div className="answer2" onClick={answerClick}>
            {" "}
            {allQuestions.length === 0 ? (
              <h1>Loading...</h1>
            ) : (
              allQuestions[currentQuestion].incorrect_answers[0]
            )}
          </div>
          <div className="answer3" onClick={answerClick}>
            {" "}
            {allQuestions.length === 0 ? (
              <h1>Loading...</h1>
            ) : (
              allQuestions[currentQuestion].incorrect_answers[1]
            )}
          </div>
          <div className="answer4" onClick={answerClick}>
            {" "}
            {allQuestions.length === 0 ? (
              <h1>Loading...</h1>
            ) : (
              allQuestions[currentQuestion].incorrect_answers[2]
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
