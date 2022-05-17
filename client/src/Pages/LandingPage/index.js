import React from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  // use this to redirect to other pages
  const navigate = useNavigate();

  return (
    <>
      <div id="LandingPage-section">
        <div id="LandingPage-container">
          <img
            src="../../images/quizzical-landing.png"
            id="Landing-logo"
            alt="Quizzical Logo"
          />
          <h2 id="Landing-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            viverra dictumst posuere aliquet sem nullam in diam. Eleifend
            viverra dictumst posuere aliquet sem nullam in diam.
          </h2>
          <button className="primary-button" onClick={() => navigate("/settings")}>Play</button>
          <button className="secondary-button" onClick={() => navigate("/rules")}>Rules</button>
        </div>
        <footer>
          Created and designed by&nbsp;
          <a href="https://github.com/Scralfie" target="_blank">
            Alfred
          </a>
          ,&nbsp;
          <a href="https://github.com/Eluented" target="_blank">
            Onur
          </a>
          ,&nbsp;
          <a href="https://github.com/PrishalM" target="_blank">
            Prishal
          </a>
          , and&nbsp;
          <a href="https://github.com/rsho-create" target="_blank">
            Robyn
          </a>
          .
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
