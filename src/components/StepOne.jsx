import React, { useContext } from "react";
import paperIcon from "/src/assets/icon-paper.svg";
import scissorsIcon from "/src/assets/icon-scissors.svg";
import rockIcon from "/src/assets/icon-rock.svg";
import bgTriangle from "/src/assets/bg-triangle.svg";
import { useNavigate } from "react-router-dom";
import { ChoiceContext } from "../contexts/ChoiceContext";

function StepOne() {
  const { setChoice } = useContext(ChoiceContext);
  const navigate = useNavigate();

  const handleChoice = (item, borderClass) => {
    setChoice({ item, borderClass });
    navigate("/steptwo");
  };

  return (
    <div className="p-10 relative md:w-96 md:self-center">
      <img src={bgTriangle} alt="bg-triangle" />

      <div
        id="paper"
        className="bg-white w-36 rounded-full p-8 h-36 border-[1em] border-Paper-Gradient absolute top-0 -left-2"
        onClick={() => handleChoice("paper", "border-Paper-Gradient")}
      >
        <img className="mx-auto" src={paperIcon} alt="icon-paper" />
      </div>

      <div
        id="scissors"
        className="bg-white w-36 rounded-full p-8 h-36 border-[1em] border-Scissors-Gradient-1 absolute top-0 -right-2"
        onClick={() => handleChoice("scissors", "border-Scissors-Gradient-1")}
      >
        <img className="mx-auto" src={scissorsIcon} alt="icon-scissors" />
      </div>

      <div
        id="rock"
        className="bg-white  w-36 rounded-full p-8 h-36 border-[1em] border-Rock-Gradient absolute bottom-0 left-1/2 transform -translate-x-1/2"
        onClick={() => handleChoice("rock", "border-Rock-Gradient")}
      >
        <img className="mx-auto" src={rockIcon} alt="icon-rock" />
      </div>
    </div>
  );
}

export default StepOne;
