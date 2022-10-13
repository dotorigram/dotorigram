import React, { useRef } from 'react';
import logo from '../static/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {auth, db} from '../firebase/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {getDocs, where, query, collection} from 'firebase/firestore';


const Login = ({setAuthenticate}) => {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id_ref = useRef(null);
  const pw_ref = useRef(null);


  const submitId = async (e) => {
    e.preventDefault();
    let user = {};
    console.log(id_ref.current.value, pw_ref.current.value);
    try{
      user = await signInWithEmailAndPassword(auth, id_ref.current.value, pw_ref.current.value);
      console.log(user);
    }
    catch {
      console.log("로그인이 실패하였습니다...");
      return
    }
      const user_docs = await getDocs(query(
          collection(db, "users"), where("user_id", "==", user.user.email)
      ));
      user_docs.forEach(u => {
          console.log(u.data())
      })
      dispatch({ type: 'USER_NAME', payload: { id } });
      setAuthenticate(true);
      navigate('/');
  };
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <div className='w-[21.875rem] py-2.5 border-[1px] border-slate-300'>
        <Link to='/'>
          <img className='mx-auto mb-6' style={{ width: 175 }} src={logo} alt='' />
        </Link>
        <form className='flex flex-col mb-2.5' onSubmit={submitId}>
          <input
            className='w-[16.875rem] bg-[#fafafa] h-9 mb-[5px] mx-auto pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 outline-none rounded-[5px]'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
            required
            ref={id_ref}
            onChange={(event) => setId(event.target.value)}
          />
          <input
            className='w-[16.875rem] bg-[#fafafa] h-9 mb-2.5 mx-auto pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 outline-slate-50 rounded-[5px]'
            type='password'
            placeholder='비밀번호'
            required
            ref={pw_ref}
          />
          <button className='w-[16.875rem] mx-auto py-1 bg-[#0095f6] text-white h-4.5 rounded-[5px]' type='submit' id='logins'>로그인</button>
        </form>
        <span className='block text-center'>
          계정이 없으신가요?
          <Link className='text-[#0095f6]' to='/register'>
            가입하기
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
