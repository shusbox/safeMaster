import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuest from "./pages/mainGuest";
import MainUser from "./pages/mainUser";
import SelectQuiz from "./pages/selectQuiz";
import Quiz from "./pages/quiz";
import FinishQuiz from "./components/finishQuiz";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainGuest /> } />
        <Route path="/signin" element={ <MainUser /> } />
        <Route path="/quiz" element={ <SelectQuiz /> } />
        <Route path="/quiz/sciencelab" element={ <Quiz /> } />
        <Route path="/finish" element={ <FinishQuiz /> } />
      </Routes>
    </Router>
  );
};

export default App;
