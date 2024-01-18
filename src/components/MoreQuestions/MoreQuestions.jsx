import React from 'react'

export const MoreQuestions = ({type, questions}) => {

  return (
    <div className="more-questions-container pl-10">
        <h2 className="text-xl font-medium">{type}</h2>
        <div className="questions-container mt-5 flex flex-col gap-4">
            {
                questions && questions.length > 0 ? (
                    questions.map((question)=> {
                        return (
                            <div className="single-question-container flex gap-2 items-center cursor-pointer">
                                <div className="question-counter bg-slate-200 h-8 w-8 flex justify-center items-center text-sm font-semibold">
                                    {question.answer_count}
                                </div>
                                <div className="question-text">
                                    {question.title}
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <p className='text-sm text-gray-500'>No questions found</p>
                )
            }
        </div>
    </div>
  )
}
