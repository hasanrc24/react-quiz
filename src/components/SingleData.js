import React, { useState } from "react";
import { data } from "../dummyData";
const SingleData = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);

  const handleAnswer = (e) => {
    setAnswer([...answer, e.target.innerText]);
    setCurrentQuestion(currentQuestion + 1);
  };
  // console.log(answer);
  return (
    <div className="flex gap-4">
      <div className="flex items-center">{data[currentQuestion]?.question}</div>
      <div className="">
        {data[currentQuestion]?.options?.map((option, i) => {
          return (
            <button
              className="block bg-slate-600 hover:bg-slate-800 my-3 p-2 w-full rounded-md"
              key={i}
              onClick={handleAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SingleData;
