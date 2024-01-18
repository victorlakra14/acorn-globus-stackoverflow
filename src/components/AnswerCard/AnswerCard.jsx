import React, { useEffect, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import axiosInstance from '../../Axios';
import ReactMarkdown from 'react-markdown';

export const AnswerCard = ({data}) => {

    const [answer, setAnswer] = useState();

    const getAnswer = async () => {

        try {
            const res = await axiosInstance.get(`/2.3/answers/${data.accepted_answer_id}?order=desc&sort=activity&site=stackoverflow&filter=!nNPvSNe7D9`)
            setAnswer(res.data.items[0])
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getAnswer()
    }, [])

    console.log("Answer", answer);

  return (
    <>
        {answer ? (
            <div className="answer-card-container shadow-md rounded-lg mb-5">
                <div className="answer-card-details flex justify-between items-center bg-slate-100 p-7 rounded-tl-lg rounded-tr-lg">
                    <div className="answer-card-text-details flex gap-5">
                        <div className="flex gap-1">
                            <p>Author:</p>
                            <p className="text-orange-500">{answer.owner.display_name} ({answer.owner.reputation})</p>
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
                        <div className="bg-orange-500 flex justify-center items-center text-white pl-6 pr-6 font-bold">{answer.score}</div>
                        <button className="bg-orange-500 flex justify-center items-center p-1 pr-2 pl-2 text-white rounded-tr-lg rounded-br-lg">
                            <AddIcon />
                        </button>
                    </div>
                </div>

                <div className="answer-card-content p-5">
                    <ReactMarkdown>{answer.body_markdown}</ReactMarkdown>
                </div>
            </div>
        ) : (
            <></>
        )}
    </>
  )
}
