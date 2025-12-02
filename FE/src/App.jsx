import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuest from "./pages/mainGuest";
import MainUser from "./pages/mainUser";
import SelectQuiz from "./pages/selectQuiz";
import Quiz from "./pages/quiz";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainGuest /> } />
        <Route path="/signin" element={ <MainUser /> } />
        <Route path="/selectQuiz" element={ <SelectQuiz /> } />
        <Route path="/quiz" element={ <Quiz /> } />
      </Routes>
    </Router>
  );
};

export default App;
