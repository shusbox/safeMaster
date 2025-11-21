const Signup = () => {
  return (
    <div>
      <p> 회원가입하기 </p>
      <form>
        <input placeholder="아이디" required/>
        <input placeholder="비밀번호" required/>
        <input placeholder="이메일" />
        <button> 회원가입 </button>
      </form>
    </div>
  )
}

export default Signup;