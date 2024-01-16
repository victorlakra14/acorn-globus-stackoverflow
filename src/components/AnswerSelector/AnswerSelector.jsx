import React, { useState } from 'react'

export const AnswerSelector = () => {

  const [selectedAnswerOption, setSelectedAnswerOption] = useState("Votes");

  const handleSelectedAnswerOption = (option) => {
    setSelectedAnswerOption(option)
  }

  return (
    <div className="answer-selector flex justify-between items-center">
        <div>
          <p className="font-medium text-lg">
            20 Answers
          </p>
        </div>

        <div className="answer-options flex gap-5">

          <div onClick={() => handleSelectedAnswerOption("Votes")}>
            <p className={`font-medium cursor-pointer ${selectedAnswerOption === "Votes" ? "text-orange-500" : ""}`}
            >Votes</p>
            <div className="h-[3px] bg-orange-500 rounded mt-3" style={{visibility: selectedAnswerOption === "Votes" ? "visible" : "hidden"}} />
          </div>
          <div onClick={() => handleSelectedAnswerOption("Oldest")}>
            <p className={`font-medium cursor-pointer ${selectedAnswerOption === "Oldest" ? "text-orange-500" : ""}`}
            >Oldest</p>
            <div className="h-[3px] bg-orange-500 rounded mt-3" style={{visibility: selectedAnswerOption === "Oldest" ? "visible" : "hidden"}} />
          </div>
          <div onClick={() => handleSelectedAnswerOption("Active")}>
            <p className={`font-medium cursor-pointer ${selectedAnswerOption === "Active" ? "text-orange-500" : ""}`}
            >Active</p>
            <div className="h-[3px] bg-orange-500 rounded mt-3" style={{visibility: selectedAnswerOption === "Active" ? "visible" : "hidden"}} />
          </div>
        </div>
    </div>
  )
}
