import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const AnswerCard = () => {
  return (
    <div className="answer-card-container m-5 shadow-md rounded-lg">
        <div className="answer-card-details flex justify-between items-center bg-slate-100 p-7 rounded-tl-lg rounded-tr-lg">
            <div className="answer-card-text-details flex gap-5">
                <div className="flex gap-1">
                    <p>Author:</p>
                    <p className="text-orange-500">javed (308)</p>
                </div>
                <div className="flex gap-1">
                    <p>Answered: </p>
                    <p>Dec 9 '19 at 8:20</p>
                </div>
            </div>
            <div className="answer-card-counter flex gap-[2px]">
                <button className="bg-orange-500 flex justify-center items-center p-1 pr-2 pl-2 text-white rounded-tl-lg rounded-bl-lg">
                    <RemoveIcon />
                </button>
                <div className="bg-orange-500 flex justify-center items-center text-white pl-6 pr-6 font-bold">25</div>
                <button className="bg-orange-500 flex justify-center items-center p-1 pr-2 pl-2 text-white rounded-tr-lg rounded-br-lg">
                    <AddIcon />
                </button>
            </div>
        </div>

        <div className="answer-card-content p-5">
            <p className="font-medium">For more simplicity, I want to add the vs code settings path in addition to Ricardo's answer. You can get like this:</p>
            <p className="font-medium">For more simplicity, I want to add the vs code settings path in addition to Ricardo's answer. You can get like this:</p>
            <p className="font-medium">For more simplicity, I want to add the vs code settings path in addition to Ricardo's answer. You can get like this:</p>
            <p className="font-medium">For more simplicity, I want to add the vs code settings path in addition to Ricardo's answer. You can get like this:</p>
        </div>
    </div>
  )
}
