import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import QuizPage from "./pages/quiz";

const Home = () => {
  return (
    <div>
      <h1> 안전마스터 </h1>
      <Link to='/login'> <button> 시작하기 </button> </Link>
    </div>
  );
};

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Routes>
      </BrowserRouter> */}
      <QuizPage />
    </>
  );
};

export default App
