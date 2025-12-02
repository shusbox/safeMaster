import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import MainUp from "./pages/main2";
import Quiz from "./pages/quiz";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/signin" element={ <MainUp /> } />
        <Route path="/quiz" element={ <Quiz /> } />
      </Routes>
    </Router>
  );
};

export default App
