import { Route, Routes } from "react-router-dom";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import { SearchQuestionPage } from "./pages/SearchQuestionPage/SearchQuestionPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<QuestionPage />} />
      {/* <Route path="/" element={<QuestionPage />} /> */}
      <Route path="/search/:search" element={<SearchQuestionPage />} />
    </Routes>
  );
}

export default App;
