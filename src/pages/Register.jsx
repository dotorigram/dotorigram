import React, { useState } from 'react';
import logo from '../static/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useRef } from 'react';
import { useCallback } from 'react';

const Register = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  //유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const id_ref = useRef();
  const name_ref = useRef();
  const pw_ref = useRef();

  const navigate = useNavigate();

  const signup = async () => {
    const id = id_ref.current.value;
    const nick = name_ref.current.value;
    //Auth
    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    // console.log(user);
    
    //database
    const user_doc = await addDoc(collection(db, 'users'), {
      user_id: id,
      name: nick,
    });
    // console.log(user_doc.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  //이름
  const onChangeName = useCallback((event) => {
    setName(event.target.value);
    if (event.target.value.length < 2 || event.target.value.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
      setIsName(false);
    } else {
      setNameMessage('올바른 이름 형식입니다 :)');
      setIsName(true);
    }
  }, []);
  //이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setId(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식이에요');
      setIsEmail(true);
    }
  }, []);
  //비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호에요');
      setIsPassword(true);
    }
  }, []);
  //비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setConfirmPassword(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요');
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요');
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="w-[21.875rem]">
        <Link to="/">
          <img
            className="mx-auto mb-6"
            style={{ width: 175 }}
            src={logo}
            alt=""
          />
        </Link>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="relative mb-5">
            <input
              className="w-[16.875rem] bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
              type="text"
              placeholder="휴대폰 번호 또는 이메일 주소"
              ref={id_ref}
              onChange={onChangeEmail}
            /><br />
            {id.length > 0 && (
              <span className={`message ${isEmail ? 'success' : 'error'}`}>
                {emailMessage}
              </span>
            )}
          </div>
          <div className="relative mb-5">
            <input
              className="w-[16.875rem] bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
              type="text"
              placeholder="닉네임"
              ref={name_ref}
              onChange={onChangeName}
            /><br />
            {name.length > 0 && (
              <span className={`message ${isName ? 'success' : 'error'}`}>
                {nameMessage}
              </span>
            )}
          </div>
          {/* <input
            className="bg-[#fafafa] mb-[5px] pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
            type="text"
            placeholder="사용자 이름"
            onChange={(event) => setUsername(event.target.value)}
          /> */}
          <div className="relative mb-5">
            <input
              className="w-[16.875rem] bg-[#fafafa] mb-2.5 pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
              type="password"
              placeholder="비밀번호"
              ref={pw_ref}
              onChange={onChangePassword}
            /><br />
            {password.length > 0 && (
              <span className={`message ${isPassword ? 'success' : 'error'}`}>
                {passwordMessage}
              </span>
            )}
          </div>
          <div className="relative mb-5">
            <input
              className="w-[16.875rem] bg-[#fafafa] mb-2.5 pt-3.5 pr-0 py-0.5 px-2 border-[1px] border-slate-300 rounded-[5px]"
              type="password"
              placeholder="비밀번호 확인"
              onChange={onChangePasswordConfirm}
            /><br />
            {confirmPassword.length > 0 && (
            <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
          )}
          </div>
          <button
            className="w-[16.875rem] bg-[#0095f6] py-1 text-white rounded-[5px]"
            type="submit"
            disabled={!(isName && isEmail && isPassword && isPasswordConfirm)}
            onClick={signup}
          >
            가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
