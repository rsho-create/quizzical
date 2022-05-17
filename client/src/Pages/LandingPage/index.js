import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components";

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
          <button className="primary-button" onClick={() => navigate("/agree")}>
            Play
          </button>
          <button
            className="secondary-button"
            onClick={() => navigate("/rules")}
          >
            Rules
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
