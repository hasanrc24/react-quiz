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
    <div className={currentQuestion < data.length ? `flex gap-4` : "flex"}>
      <div className="flex flex-col items-center justify-center">
        <p>{data[currentQuestion]?.question}</p>
        {currentQuestion < data.length && (
          <p>{currentQuestion + 1 + "/" + data.length}</p>
        )}
      </div>
      <div className="">
        {currentQuestion >= data.length ? (
          <button
            onClick={() => setCurrentQuestion(0)}
            className="bg-slate-600 hover:bg-slate-800 my-3 p-2 rounded-md"
          >
            Go back
          </button>
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
  );
};

export default SingleData;
