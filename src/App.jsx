// import { MenuBar } from "./components/MenuBar/MenuBar";
import { MoreQuestions } from "./components/MoreQuestions/MoreQuestions";
import { TopBar } from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <MenuBar /> */}
      <MoreQuestions type="Linked" />
      <MoreQuestions type="Related" />
    </div>
  );
}

export default App;
