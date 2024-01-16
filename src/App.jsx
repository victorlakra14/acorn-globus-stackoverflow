import { MenuBar } from "./components/MenuBar/MenuBar";
// import { MoreQuestions } from "./components/MoreQuestions/MoreQuestions";
import { AnswerCard } from "./components/AnswerCard/AnswerCard";
import { AnswerSelector } from "./components/AnswerSelector/AnswerSelector";
import { TopBar } from "./components/TopBar/TopBar";
import { QuestionCard } from "./components/QuestionCard/QuestionCard";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <MenuBar /> */}
      {/* <MoreQuestions type="Linked" /> */}
      {/* <MoreQuestions type="Related" /> */}
      {/* <AnswerCard /> */}
      {/* <AnswerSelector /> */}
      <QuestionCard />
    </div>
  );
}

export default App;
