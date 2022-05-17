import React from "react";
import { Navbar, Results } from "../../components";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-section">
        <Navbar />
        <div className="page-container">
          <h1>Results</h1>
          <h3>Player1, pick the Loser's poison!</h3>
          <div className="btn-container">
            <button
              id="restartBtn"
              className="primary-button"
              onClick={() => navigate("/settings")}
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsPage;
