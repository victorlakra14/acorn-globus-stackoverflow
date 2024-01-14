import React from 'react'

export const MoreQuestions = ({type}) => {

  return (
    <div className="more-questions-container pl-10 mt-10">
        <h2 className="text-xl font-medium">{type}</h2>
        <div className="questions-container mt-5 flex flex-col gap-4">
            <div className="single-question-container flex gap-2 items-center cursor-pointer">
                <div className="question-counter bg-slate-200 h-8 w-8 flex justify-center items-center text-sm font-semibold">
                    2
                </div>
                <div className="question-text">
                    What is the difference between a software developer and a software engineer?
                </div>
            </div>
            <div className="single-question-container flex gap-2 items-center cursor-pointer">
                <div className="question-counter bg-slate-200 h-8 w-8 flex justify-center items-center text-sm font-semibold">
                    43
                </div>
                <div className="question-text">
                    Need to install a package from GitHub but it's not working
                </div>
            </div>
            <div className="single-question-container flex gap-2 items-center cursor-pointer">
                <div className="question-counter bg-slate-200 h-8 w-8 flex justify-center items-center text-sm font-semibold bg-orange-500 text-white">
                    12
                </div>
                <div className="question-text">
                    How to use a variable from another file?
                </div>
            </div>
            <div className="single-question-container flex gap-2 items-center cursor-pointer">
                <div className="question-counter bg-slate-200 h-8 w-8 flex justify-center items-center text-sm font-semibold">
                    1
                </div>
                <div className="question-text">
                    Can I make a website without using HTML?
                </div>
            </div>
        </div>
    </div>
  )
}
