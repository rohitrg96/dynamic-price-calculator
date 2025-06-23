import React from "react";
import type { GlobalCardProps } from "../utils/types";
import { Chart } from "./Chart";

const GlobalCard: React.FC<GlobalCardProps> = ({ children, save }) => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-6 mt-12 bg-cyan-50  rounded-2xl shadow-lg border-2 border-cyan-600 italic ">
        <div className="border-2 border-cyan-600 mb-4 sm:h-12 content-center rounded-xl   bg-cyan-100 flex justify-between sm:text-lg font-semibold ">
          <div>💰 Custom Pricing Calculator </div>
          <div>
            <button
              onClick={() => save()}
              className="bg-cyan-200 hover:bg-cyan-400 hover:text-white rounded-2xl border-black border-1  m-1 px-2 sm:h-9 cursor-pointer"
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
