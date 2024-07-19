import React, { useContext, useEffect, useState } from "react";
import paperIcon from "/src/assets/icon-paper.svg";
import scissorsIcon from "/src/assets/icon-scissors.svg";
import rockIcon from "/src/assets/icon-rock.svg";
import { ChoiceContext } from "../contexts/ChoiceContext";
import WinOrLosse from "./WinOrLosse";

const icons = {
  paper: paperIcon,
  scissors: scissorsIcon,
  rock: rockIcon,
};

const borders = {
  paper: "border-Paper-Gradient",
  scissors: "border-Scissors-Gradient-1",
  rock: "border-Rock-Gradient",
};

function StepTwo({ onResult }) {
  const { choice, cpuChoice, setCpuChoice } = useContext(ChoiceContext);
  const [showCpuChoice, setShowCpuChoice] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [resultCalled, setResultCalled] = useState(false);

  useEffect(() => {
    const options = ["paper", "scissors", "rock"];
    const timeoutId = setTimeout(() => {
      const randomChoice = options[Math.floor(Math.random() * options.length)];
      setCpuChoice({ item: randomChoice, borderClass: borders[randomChoice] });
      setShowCpuChoice(true);

    
      let result = null;
      if (choice.item === randomChoice) {
        result = "draw";
      } else if (
        (choice.item === "rock" && randomChoice === "scissors") ||
        (choice.item === "paper" && randomChoice === "rock") ||
        (choice.item === "scissors" && randomChoice === "paper")
      ) {
        result = "win";
      } else {
        result = "lose";
      }
      setGameResult(result);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [choice.item, setCpuChoice]);

  useEffect(() => {
    if (gameResult !== null && !resultCalled) {
      const resultTimeoutId = setTimeout(() => {
        setShowResult(true);

        onResult(gameResult);
        setResultCalled(true);
      }, 1000);

      return () => clearTimeout(resultTimeoutId);
    }
  }, [gameResult, onResult, resultCalled]);

  return (
    <div className="text-white text-[0.1rem] flex flex-col justify-between gap-10 h-80  md:w-96 md:self-center ">
      <div className="flex justify-between">
        <div
          className={`bg-white flex flex-col gap-10 items-center w-32 rounded-full p-8 h-32 border-8 ${choice.borderClass}`}
        >
          <img
            className="mx-auto"
            src={icons[choice.item]}
            alt={`icon-${choice.item}`}
          />
          <h1 className="text-nowrap text-[1rem]">YOU PICKED</h1>
        </div>
        {showCpuChoice && (
          <div
            className={`bg-white flex flex-col gap-10 items-center w-32 rounded-full p-8 h-32 border-8 ${cpuChoice.borderClass}`}
          >
            <img
              className="mx-auto"
              src={icons[cpuChoice.item]}
              alt={`icon-${cpuChoice.item}`}
            />
            <h1 className="text-nowrap text-[1rem]">THE HOUSE PICKED</h1>
          </div>
        )}
      </div>
      {showResult && gameResult && <WinOrLosse result={gameResult} />}{" "}
    </div>
  );
}

export default StepTwo;
