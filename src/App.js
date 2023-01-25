import React from "react";
import SingleData from "./components/SingleData";

function App() {
  return (
    <div className="bg-blue-300 h-screen w-screen flex justify-center items-center">
      <div className="bg-customBlack p-6 rounded-xl text-white shadow-2xl">
        <SingleData />
      </div>
    </div>
  );
}

export default App;
