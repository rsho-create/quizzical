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
          <h2 id="Landing-text">The drinking game like no other!</h2>
          <div id="beer-container">
            <img
              id="reverse-beer"
              src="../images/beer.png"
              alt="frothy pint of beer"
            />
            <img src="../images/beer.png" alt="frothy pint of beer" />{" "}
          </div>{" "}
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
