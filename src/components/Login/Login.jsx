import React from 'react';
import logo from '../../static/img/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link to="/"><img style={{width:175}} src={logo} alt="" /></Link>
      <form class="flex flex-col">
        <input class="w-64 h-9 pt-3.5 pr-0 py-0.5 px-2" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input class="w-64 h-9 pt-3.5 pr-0 py-0.5 px-2" type="password" placeholder="비밀번호" />
        <input class="w-64 h-4.5" type="submit" id="logins" value="로그인" />
      </form>
      <span>계정이 없으신가요? <Link to="/register">가입하기</Link></span>
    </div>
  );
};

export default Login;
