import React from "react";
import type { GlobalCardProps } from "../utils/types";
import { Chart } from "./Chart";

const GlobalCard: React.FC<GlobalCardProps> = ({ children, save }) => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-6 mt-12 bg-cyan-50  rounded-2xl shadow-lg border-2 border-cyan-600 italic ">
        <div className="border-2 border-cyan-600 mb-4 h-12 content-center rounded-xl text-lg font-semibold  bg-cyan-100 flex justify-between">
          <div>💰 Custom Pricing Calculator </div>
          <div>
            {/* <button onClick={() => {}}> Save </button> */}
            <button
              onClick={() => save()}
              className="bg-cyan-400  rounded-2xl border-cyan-600 border-2 m-1 px-2"
            >
              Save & Share
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>

        <div className=" mt-10">
          <Chart />
        </div>
      </div>
    </>
  );
};

export default GlobalCard;
