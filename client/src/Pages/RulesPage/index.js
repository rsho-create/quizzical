import React from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

const RulesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="RulesPage-section">
        <div id="RulesPage-container">
          <Navbar />
          <h1 id="rules-heading">Rules</h1>
          <ol id="rules-list">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
          </ol>
          <button
            id="back-btn"
            className="primary-button"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default RulesPage;
