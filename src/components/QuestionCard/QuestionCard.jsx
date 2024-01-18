import React, { useEffect, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import shareIcon from "../../media/arrow-next-2842.png"
import commentIcon from "../../media/speech-bubble-1079.png"
import { formatDistanceToNow } from 'date-fns';
import numeral from 'numeral';

export const QuestionCard = ({data}) => {

    const [savedQuestion, setSavedQuestion] = useState(false);

    const toggleSavedQuestion = () => {
        setSavedQuestion(!savedQuestion);
    }

    const convertTimestampToDate = (time) => {
        const timeStampInSeconds = parseInt(time, 10);

        if(!isNaN(timeStampInSeconds)) {
            const date = new Date(timeStampInSeconds * 1000);
            return formatDistanceToNow(date, {addSuffix: true})
        }

        return "Invalid date format"
    }

    const postDate = convertTimestampToDate(data.creation_date)
    const lastActiveDate = convertTimestampToDate(data.last_activity_date)

    const formatNumber = (num) => {
        console.log(num)
        if(num > 1000){
            return numeral(num).format('0.0a')
        }else{
            return num
        }
    }


  return (
    <div className="question-card-container shadow-xl rounded-b-lg">
        <div className="question-detail bg-orange-500 flex justify-between items-center p-4 rounded-t-lg">
            <div className="question-text text-white font-bold font-xl">
                {data.title}
            </div>
            <div className="question-counter">
                <div className="answer-card-counter flex">
                    <button className="border-[1px] flex justify-center items-center p-1 pr-2 pl-2 text-white rounded-tl-lg rounded-bl-lg">
                        <RemoveIcon />
                    </button>
                    <div className="border-t-[1px] border-b-[1px] flex justify-center items-center text-white pl-6 pr-6 font-bold">{data.score}</div>
                    <button className="border-[1px] flex justify-center items-center p-1 pr-2 pl-2 text-white rounded-tr-lg rounded-br-lg">
                        <AddIcon />
                    </button>
                </div>
            </div>
        </div>
        <hr />
        <div className="question-info bg-orange-500 flex justify-between items-center p-4">
            <div className="user-detail flex gap-3 text-white font-medium items-center">
                <Avatar alt="Ricardo Perrera" src={data.owner.profile_image} />
                <p className="username">{data.owner.display_name}</p>
                <div className="bg-[#f4984f] rounded-md">
                    <p className="p-1">{data.owner.reputation}</p>
                </div>
            </div>
            <div className="question-date text-white font-medium flex gap-3">
                <p>{postDate}</p>
                <div className="w-[0.5px] bg-white" />
                <p>{lastActiveDate}</p>
                <div className="w-[0.5px] bg-white" />
                <p>Viewed {formatNumber(data.view_count)} times</p>
            </div>
        </div>
        <div className="question-text flex flex-col gap-4 p-4">
            <div dangerouslySetInnerHTML={{__html: data.body}} />
            {/* <div className="bg-slate-200 p-4">
                <p>
                    Cannot be loaded because running scripts is disabled on this system.
                </p>
            </div>
            <div>
                <p>
                    After reading this I tried to run the vs code in administrator mode, 
                </p>
            </div> */}
        </div>
        <div className="question-links p-3 flex justify-between items-center">
            <div className="flex gap-1">
                {
                    savedQuestion ? (
                        <BookmarkIcon 
                            style={{ color: "orange", cursor: "pointer" }}
                            onClick={toggleSavedQuestion}
                        />
                    ) : (
                        <BookmarkBorderIcon 
                            style={{ color: "orange", cursor: "pointer" }}
                            onClick={toggleSavedQuestion}
                        />
                    )
                }
                <p className="font-xl text-orange-500">{data.favorite_count}</p>
            </div>
            <div className="flex gap-6 p-2">
                <img alt="share-icon" src={shareIcon} className="h-6 cursor-pointer" />
                <img alt="comment-icon" src={commentIcon} className="h-6 cursor-pointer" />
            </div>
        </div>
    </div>
  )
}
