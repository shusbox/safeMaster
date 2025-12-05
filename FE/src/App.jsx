import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuest from "./pages/mainGuest";
import MainUser from "./pages/mainUser";
import SelectQuiz from "./pages/selectQuiz";
import QuizPage from "./pages/quiz/sciencelab";
import FinishQuiz from "./components/finishQuiz";
import Rank from "./components/rank/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainGuest /> } />
        <Route path="/signin" element={ <MainUser /> } />
        <Route path="/quiz" element={ <SelectQuiz /> } />
        <Route path="/quiz/sciencelab" element={ <QuizPage /> } />
        <Route path="/finish" element={ <FinishQuiz /> } />
        <Route path="/rank" element={ <Rank /> } />
      </Routes>
    </Router>
  );
};

export default App;
