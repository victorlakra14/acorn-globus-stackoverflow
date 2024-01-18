import React, { useEffect, useState } from "react";
import { TopBar } from "../../components/TopBar/TopBar";
import { MenuBar } from "../../components/MenuBar/MenuBar";
import { QuestionCard } from "../../components/QuestionCard/QuestionCard";
import { AnswerSelector } from "../../components/AnswerSelector/AnswerSelector";
import { AnswerCard } from "../../components/AnswerCard/AnswerCard";
import { MoreQuestions } from "../../components/MoreQuestions/MoreQuestions";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Axios";
import "./SearchQuestionPage.css";

export const SearchQuestionPage = () => {
  const { search } = useParams();
  console.log(search);

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState();
  const [linkedQuestions, setLinkedQuestions] = useState();
  const [relatedQuestions, setRelatedQuestions] = useState();

  const getSearchedQuestions = async (search) => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(
        `/2.3/similar?order=asc&sort=activity&title=${search}&site=stackoverflow&filter=!6WPIomnJQl0me`
      );
      setQuestions(res.data.items);
      await getLinkedQuestions(res.data.items[0].question_id);
      await getRelatedQuestions(res.data.items[0].question_id);
    } catch (err) {
      return err.message;
    } finally {
      setLoading(false);
    }
  };

  const getLinkedQuestions = async (temp) => {
    try {
      const res = await axiosInstance.get(
        `/2.3/questions/${temp}/linked?order=asc&sort=activity&site=stackoverflow`
      );
      setLinkedQuestions(res.data.items);
      // alert("search linked")
    } catch (err) {
      return err.message;
    }
  };

  const getRelatedQuestions = async (temp) => {
    try {
      const res = await axiosInstance.get(
        `/2.3/questions/${temp}/related?order=asc&sort=activity&site=stackoverflow`
      );
      setRelatedQuestions(res.data.items);
      // alert("search related")
    } catch (err) {
      return err.message;
    }
  };

  useEffect(() => {
    getSearchedQuestions(search);
  }, [search]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <TopBar />
          <div className="grid grid-cols-4 mt-[17vh]">
            <div className="col-span-1">
              <MenuBar />
            </div>
            <div className="col-span-2 flex flex-col gap-6">
              {questions &&
                questions.slice(0, 4).map((question) => {
                  return (
                    <>
                      <QuestionCard data={question} />
                      <AnswerSelector data={question} />
                      <AnswerCard data={question} />
                    </>
                  );
                })}
            </div>
            <div className="col-span-1 flex flex-col gap-6">
              {questions && (
                <>
                  <MoreQuestions questions={linkedQuestions} type="Linked" />
                  <MoreQuestions questions={relatedQuestions} type="Related" />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
