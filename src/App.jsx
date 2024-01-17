import { TopBar } from "./components/TopBar/TopBar";
import { MenuBar } from "./components/MenuBar/MenuBar"
import { QuestionCard } from "./components/QuestionCard/QuestionCard"
import { AnswerSelector } from "./components/AnswerSelector/AnswerSelector"
import { AnswerCard } from "./components/AnswerCard/AnswerCard"
import { MoreQuestions } from "./components/MoreQuestions/MoreQuestions"
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, getQuestionsError, getQuestionsStatus, selectAllQuestions } from "./features/questions/questionsSlice";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const questions = useSelector(selectAllQuestions);
  const questionsStatus = useSelector(getQuestionsStatus);
  const questionError = useSelector(getQuestionsError);

  useEffect(() => {
    if(questionsStatus === "idle"){
      dispatch(fetchQuestions())
    }
  }, [questionsStatus, dispatch])

  console.log("questions", questions);

  return (
    <div className="App">
      <TopBar />
      <div className="grid grid-cols-4 mt-[17vh]">
        <div className="col-span-1">
          <MenuBar />
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          {
            questions &&
            (questions.map((item) => {
              return (
                <>
                  <QuestionCard data={item} />
                  <AnswerSelector data={item}/>
                  <AnswerCard data={item}/>
                </>
              )
            }))
          }
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <MoreQuestions type="Linked"/>
          <MoreQuestions type="Related"/>
        </div>
      </div>
    </div>
  );
}

export default App;
