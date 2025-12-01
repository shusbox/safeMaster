import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Quiz from "./pages/quiz";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Main /> } />
      </Routes>
    </Router>
  );
};

export default App
