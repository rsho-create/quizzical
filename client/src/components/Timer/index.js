import React from "react";
import "./timer.css";
import { ProgressBar } from "react-bootstrap";

export default function Timer({ currTime, maxTime }) {
  return (
    <ProgressBar
      className="timer"
      now={currTime}
      min={0}
      max={maxTime}
      srOnly
    />
  );
}