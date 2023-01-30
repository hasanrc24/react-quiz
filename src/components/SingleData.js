import React, { useState } from "react";
import { data } from "../dummyData";

const SingleData = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (e) => {
    setAnswer([...answer, e.target.innerText]);
    setCurrentQuestion(currentQuestion + 1);
    e.target.innerText === data[currentQuestion].answer && setScore(score + 1);
  };

  const percentage = ((currentQuestion + 1) / data.length) * 100;
  // console.log(score);
  return (
    <div>
      <p className="text-center mx-auto text-2xl">Simple React Quiz</p>
      <div
        className={
          currentQuestion < data.length ? `flex gap-4` : "flex justify-center"
        }
      >
        <div className="flex flex-col items-center justify-center">
          <p>{data[currentQuestion]?.question}</p>
          {currentQuestion < data.length && (
            <p>{currentQuestion + 1 + "/" + data.length}</p>
          )}
        </div>
        <div className="">
          {currentQuestion >= data.length ? (
            <div className="text-center">
              <p className="text-xl my-4">Your score is: {score}</p>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                }}
                className="bg-slate-600 hover:bg-slate-800 my-3 p-2 rounded-md"
              >
                Go back
              </button>
            </div>
          ) : (
            data[currentQuestion]?.options?.map((option, i) => {
              return (
                <button
                  className="block bg-slate-600 hover:bg-slate-800 my-3 p-2 w-full rounded-md"
                  key={i}
                  onClick={handleAnswer}
                >
                  {option}
                </button>
              );
            })
          )}
        </div>
      </div>
      <div
        className={`text-center ${currentQuestion >= data.length && "hidden"}`}
      >
        <div className="w-full bg-gray-200 h-1 mb-6">
          <div
            className="bg-green-500 h-1 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
