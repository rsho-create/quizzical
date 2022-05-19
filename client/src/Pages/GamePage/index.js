import React, { useEffect, useState, useRef } from "react";
import { Navbar, Timer } from "../../components";
import { useSelector, useDispatch } from "react-redux";
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

  // timer
  const currRoundCount = useSelector(roundCount);
  // settings for round
  const roundSettings = useSelector((state) => state.game.roundSettings);
  // all questions
  const allQuestions = useSelector(questions);

  console.log(allQuestions);

  const [timer, setTimer] = useState(-1);

  const [numOfQuestions, setNumOfQuestions] = useState(1);

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
      <Timer currTime={timer} maxTime={roundSettings[currRoundCount - 1]} />
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
        <div className="question">
          1.{" "}
          {allQuestions.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            allquestions[0].question
          )}
        </div>

        <div className="answers-container">
          <div className="answer1">A</div>
          <div className="answer2">B</div>
          <div className="answer3">C</div>
          <div className="answer4">D</div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
