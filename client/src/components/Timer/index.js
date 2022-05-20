import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function Timer( {currTime, maxTime} ) {
  console.log(currTime)
  return (
    <ProgressBar
      variant="success"
      label={`${currTime}s`}
      now={currTime}
      max={maxTime}
    />
  );
}