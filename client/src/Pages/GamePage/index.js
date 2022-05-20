import React, { useEffect, useState, useRef } from "react";
import { Navbar, Timer, Question, QuestionNumber } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import { gameInfo } from "../../reducers/gameSlice";
import { questions } from "../../reducers/questionsSlice";

const GamePage = () => {

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // info about the quiz questions & answers
  const [answers, setAnswers] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [options, setOptions] = useState([]);

  // player info -  to switch players 
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);

  // player info - set scores 
  const [ player1Score, setPlayer1Score ] = useState(0);
  const [ player2Score, setPlayer2Score ] = useState(0);

  // redux stuff
  const allQuestions = useSelector(questions);
  const questionsStatus = useSelector((state) => state.questions.status);
  const formInfo = useSelector(gameInfo);


  // timerstuff
  const [timer, setTimer] = useState(formInfo.timer);

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

  useInterval(() => {
    if (timer > 0) setTimer(timer - 1);
    else if (timer === 0) {
      setCurrentQuestion(prev => prev + 1)
      setTimer(formInfo.timer);
    }
  }, 1000);

  useEffect(() => {
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
  }, [questionsStatus, dispatch]);

  // shuffling

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    if (allQuestions?.length) {
      const question = allQuestions[currentQuestion - 1]
      let answers = [...question.incorrect_answers]

      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers)
    }
  }, [allQuestions, currentQuestion])

  // when clicked
  const handleClickAnswer = (e) => {
    if (player1) {
      setPlayer1(false);
      setPlayer2(true);
    } else {
      setPlayer1(true);
      setPlayer2(false);
    }

    const question = allQuestions[currentQuestion - 1]

    if (e.target.textContent === question.correct_answer) {

      if (player1) {
        setPlayer1Score(prev => prev + 1)
      }
      if (player2) {
        setPlayer2Score(prev => prev + 1)
      }
    }

    if ( currentQuestion < allQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/results");
    }
  };


  function answerClick(e) {
    if (player1) {
      setPlayer1(false);
      setPlayer2(true);
    } else {
      setPlayer1(true);
      setPlayer2(false);
    }
    let currentAnswer = e.target.innerHTML;
    setCurrentQuestion((prev) => prev + 1);

    // Checking the answer & provide user feedback
    if (currentAnswer === allQuestions[currentQuestion - 1].correct_answer) {
      // resets timer
      setTimer(formInfo.timer + 1)

      if (player1) {
        setPlayer1Score(prev => prev + 1)
      }
      if (player2) {
        setPlayer2Score(prev => prev + 1)
      }
      return alert("CORRECT!");
    } else {
      return alert("FAIL. DRINK UP!");
    }
  }

  return (
    <>
      <Navbar />

      <Timer
        currTime={timer}
        maxTime={formInfo.timer}
      />

      <QuestionNumber
        currQuestion={ currentQuestion }
        numOfQuestions={formInfo.numOfQuestions}
      />

      <div className="game-container">
        <div className="players">
          <div className={player1 ? "active-player player1" : "player1"}>
            Player1: {formInfo.player1}
            <div className="player1-score">Score: {player1Score}</div>
          </div>
          <div className={player2 ? "active-player player2" : "player2"}>
            Player2: {formInfo.player2}
            <div className="player2-score">Score: {player2Score}</div>
          </div>
        </div>

        <div className="question">
          {allQuestions.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            decode(allQuestions[currentQuestion - 1].question)
          )}
        </div>

        {allQuestions.length === 0 ? 
        <Box mt={20}> <CircularProgress size={150} /> </Box> 
        : 
        options.map((data, id) => (
          <Button onClick={handleClickAnswer} key={id} >
            {decode(data)}
          </Button>
        ))
        }



      </div>
    </>
  );
};

export default GamePage;
