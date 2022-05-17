import React from "react";
import { Navbar } from "../../components";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div id="error">
        <h1>ERROR 404</h1>
        <img id="drinkMan" src="../images/drunk.png" alt="Animated drunk man" width="45%"></img>
        <p>PLEASE DRINK RESPONSIBLY</p>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default NotFoundPage;
