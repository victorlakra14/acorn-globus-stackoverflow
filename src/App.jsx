import { Route, Routes } from "react-router-dom";
import { TopBar } from "./components/TopBar/TopBar";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<QuestionPage />} />
    </Routes>
  );
}

export default App;
