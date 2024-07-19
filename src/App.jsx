import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StepOne from "./components/StepOne";
import Rules from "./components/Rules.jsx";
import StepTwo from "./components/StepTwo";
import WinOrLosse from "./components/WinOrLosse.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChoiceProvider } from "./contexts/ChoiceContext";

function App() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [score, setScore] = useState(12);

  const toggleRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  const handleScore = (result) => {
    setScore((prevScore) => {
      if (result === "win") {
        return prevScore + 1;
      } else if (result === "lose") {
        return prevScore - 1;
      } else {
        return prevScore;
      }
    });
  };

  return (
    <div className="bg-1-background  px-10 py-10 flex flex-col justify-between gap-5 min-h-screen w-96 md:w-screen">
      <ChoiceProvider>
        <BrowserRouter>
          <Header score={score} />
          <Routes>
            <Route path="/" element={<StepOne />} />
            <Route
              path="/steptwo"
              element={<StepTwo onResult={handleScore} />}
            />
            <Route path="/WinOrLosse" element={<WinOrLosse />} />
          </Routes>
          <button
            className="md:w-52 md:self-end md:me-10 md:mb-10"
            onClick={toggleRules}
          >
            Rules
          </button>
          <Rules isOpen={isRulesOpen} onClose={toggleRules} />
        </BrowserRouter>
      </ChoiceProvider>
    </div>
  );
}

export default App;
