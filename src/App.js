import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages";

function App() {
  return (
    <div id="quiz-app">
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;