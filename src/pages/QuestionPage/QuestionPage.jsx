import React, { useEffect, useState } from 'react'
import { MenuBar } from '../../components/MenuBar/MenuBar'
import { QuestionCard } from '../../components/QuestionCard/QuestionCard'
import { AnswerSelector } from '../../components/AnswerSelector/AnswerSelector'
import { AnswerCard } from '../../components/AnswerCard/AnswerCard'
import { MoreQuestions } from '../../components/MoreQuestions/MoreQuestions'
import { TopBar } from '../../components/TopBar/TopBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions, getQuestionsError, getQuestionsStatus, selectAllQuestions } from '../../features/questions/questionsSlice'
import axiosInstance from '../../Axios'
import "./QuestionPage.css"

export const QuestionPage = () => {

    const dispatch = useDispatch();
    const questions = useSelector(selectAllQuestions);
    const questionStatus = useSelector(getQuestionsStatus);
    const questionError = useSelector(getQuestionsError);

    const [loading, setLoading] = useState(false);
    const [linkedQuestions, setLinkedQuestions] = useState();
    const [relatedQuestions, setRelatedQuestions] = useState();

    const getLinkedQuestions = async () => {
        try {
            const res = await axiosInstance.get(`/2.3/questions/${questions[0].question_id}/linked?order=asc&sort=activity&site=stackoverflow`)
            setLinkedQuestions(res.data.items)
        } catch (err) {
            return err.message
        }
    }

    const getRelatedQuestions = async () => {
        try {
            const res = await axiosInstance.get(`/2.3/questions/${questions[0].question_id}/related?order=asc&sort=activity&site=stackoverflow`)
            setRelatedQuestions(res.data.items)
        } catch (err) {
            return err.message
        }
    }

    useEffect(() => {
        if(questionStatus === "idle"){
            dispatch(fetchQuestions())
        }
        if(questions){
            getLinkedQuestions()
            getRelatedQuestions()
        }

        if(loading){
            setLoading(false)
        }
    }, [questionStatus, dispatch])

  return (
    <>
        <TopBar />
        <div className="grid grid-cols-4 mt-[17vh]">
            <div className="col-span-1">
                <MenuBar />
            </div>
            <div className="col-span-2 flex flex-col gap-6">
                {
                    questions && questions.slice(0,4).map((question) => {
                        return (
                            <>
                                <QuestionCard data={question} />
                                <AnswerSelector data={question}/>
                                <AnswerCard data={question}/>
                            </>
                        )
                    })
                }
            </div>
            <div className="col-span-1 flex flex-col gap-6">
                {
                    questions && <>
                        <MoreQuestions questions={linkedQuestions} type="Linked"/>
                        <MoreQuestions questions={relatedQuestions} type="Related"/>
                    </>
                }
            </div>
        </div>
    </>
  )
}
