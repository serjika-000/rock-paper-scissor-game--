
import React from "react";

const Header = ({ score }) => {
  return (
    <header className="flex justify-between border-2 border-Cyan-1 Outline rounded-lg p-5 w-full md:w-[60vw] md:self-center ">
      <div className="text-[0.5rem] flex flex-col text-white justify-center font-semibold items-start">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div>
      <div className="flex flex-col bg-white text-1-background items-center justify-evenly py-2 px-5 rounded-lg">
        <h2>SCORE</h2>
        <h1 className="text-4xl font-extrabold">{score}</h1>
      </div>
    </header>
  );
};

export default Header;
