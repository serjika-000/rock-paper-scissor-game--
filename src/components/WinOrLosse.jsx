import React from "react";
import { Link } from "react-router-dom";

function WinOrLosse({ result }) {
  return (
    <div className="text-white text-[0.1rem] flex flex-col justify-between h-fit ">
      <div className="flex flex-col gap-8 items-center">
        {result === "win" && <h1 className="text-4xl font-bold">YOU WIN</h1>}
        {result === "lose" && <h1 className="text-4xl font-bold">YOU LOSE</h1>}
        {result === "draw" && <h1 className="text-4xl font-bold">DRAW</h1>}
        <Link to="/">
          <button className="text-2-background w-32 bg-white font-semibold text-[1rem] text-nowrap">
            PLAY AGAIN
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WinOrLosse;
