import { TopBar } from "./components/TopBar/TopBar";
import { MenuBar } from "./components/MenuBar/MenuBar"
import { QuestionCard } from "./components/QuestionCard/QuestionCard"
import { AnswerSelector } from "./components/AnswerSelector/AnswerSelector"
import { AnswerCard } from "./components/AnswerCard/AnswerCard"
import { MoreQuestions } from "./components/MoreQuestions/MoreQuestions"

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="grid grid-cols-4 mt-[17vh]">
        <div className="col-span-1">
          <MenuBar />
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <QuestionCard />
          <AnswerSelector />
          <AnswerCard />
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
