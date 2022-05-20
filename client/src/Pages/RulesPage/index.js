import React from "react";
import { Navbar } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const RulesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div id="rulesPage-section">
        <h1 id="rules-heading">How to play </h1>
        <p>
          <strong>To begin,</strong> pick a category, the difficulty of the
          questions and the number of questions you would like to answer. Once
          you have (picked your username) the game will begin!
        </p>
        <h2>Drinking Rules</h2>
        <ol id="rules-list">
          <li>If you get a question wrong, drink</li>
          <li>If the timer runs out before you answer, drink</li>
          <li>The Loser drinks a forfeit, decided by the winner</li>
          <li>Winner gets bragging rights, and a pint(winner's choice)</li>
        </ol>
        <div className="btn-container">
          <button
            id="back-btn"
            className="primary-button"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
      <LocationDisplay />
    </>
  );
};

export default RulesPage;
