import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <p> 로그인하기 </p>
      <input placeholder="아이디를 입력하세요."></input>
      <button> 로그인 </button>
      <Link to='/signup'> <button> 회원가입하기 </button> </Link>
    </div>
  )
}

export default Login;