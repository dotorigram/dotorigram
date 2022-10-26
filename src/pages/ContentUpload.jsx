import React, { useCallback, useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../components/hooks/useInput';
import { clearPost, addPost } from '../redux/reducer/modules/postReducer';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import CloseIcon from '@mui/icons-material/Close';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// storage를 가져옵니다. 처음 firebase init하는 코드에 넣지 않아도 됩니다.
const storage = getStorage();

function ContentUpload() {
  const fileRef = useRef();
  const [file, setFile] = useState('');
  const [id, setId] = useState(0);
  const [previewURL, setPreviewURL] = useState('');
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file !== '') {
      setPreview(<img className='img_preview' src={previewURL} alt='previewImage' />);
    }
    return () => {};
  }, [file, previewURL]);

  const handleFileOnChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);

      saveToFirebaseStorage(file);
    };
    if (file) reader.readAsDataURL(file);
  };

  //!create
  const addData = async (e) => {
    try {
      const res = await addDoc(collection(db, 'posts'), {
        like: false,
        likeAmount: 0,
        user: `${user.user}`,
        body,
        timeStamp: serverTimestamp(),
        id,
      });
      console.log(res); // res는 undefined입니다.
    } catch (e) {
      console.log(e);
    }
  };
  //!create

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isSuccess = useSelector((state) => state.post.isSuccess);
  // const user = useSelector((state) => state.user);

  const [img, setImg, onChangeImgHandler] = useInput();
  const [body, setBody, onChangeBodyHandler] = useInput();
  useEffect(() => {
    if (!isSuccess) return;
    if (isSuccess) navigate('/');

    return () => dispatch(clearPost());
  }, [dispatch, isSuccess, navigate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addPost({
        img,
        like: false,
        likeAmount: 0,
        user: `${user.user}`,
        body,
        id: setId,
      })
    );
    setImg('');
    setBody('');
    setId(id + 1);
    navigate('/');
  };

  // 이미지 미리보기
  const onImgInputBtnClick = (e) => {
    e.preventDefault();
    //logoImgInput.current.click();
    fileRef.current.click();
  };

  // 여기가 upload 함수입니다.
  const saveToFirebaseStorage = (file) => {
    const uniqueKey = new Date().getTime();
    const newName = file.name
      .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, '')
      .split(' ')
      .join('');

    const metaData = {
      contentType: file.type,
    };

    const storageRef = sRef(storage, 'Images/' + newName + uniqueKey);
    const UploadTask = uploadBytesResumable(storageRef, file, metaData);
    UploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        alert(`error: image upload error ${JSON.stringify(error)}`);
      },
      () => {
        getDownloadURL(UploadTask.snapshot.ref).then((downloadUrl) => {
          console.log(`완료 url: ${downloadUrl}`);
        });
      }
    );
  };

  // const logoImgInput = useRef();
  // const encodeFileToBase64 = (fileBlob) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(fileBlob);
  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       setImg(reader.result);
  //       resolve();
  //     };
  //   });
  // };

  return (
    <div className='mx-auto max-w-470'>
      <form onSubmit={onSubmitHandler}>
        <div className='flex justify-between mt-2 border-b bg-white'>
          <button onClick={() => navigate('/')}>
            <KeyboardBackspaceIcon className='mb-2' />
          </button>
          <div className='mb-2 font-bold z-10'>새 게시물 만들기</div>
          <button onClick={addData} className='text-blue-500 font-bold mr-2 mb-2'>
            공유하기
          </button>
        </div>
        <div className='flex justify-center flex-col items-center gap-y-2'>
          <div className='flex justify-center'>
            {preview ? (
              <div className='flex justify-center flex-col items-center'>
                <div className='h-96 w-96 mb-2 overflow-hidden' onChange={onChangeImgHandler}>
                  {preview}
                </div>

                <button className='font-semibold text-white bg-blue-500 rounded w-32 h-8' onClick={onImgInputBtnClick} type='button'>
                  다른 사진 업로드
                </button>
              </div>
            ) : (
              <div className='flex justify-center flex-col items-center p-20 '>
                <img src={require('../static/img/addPost.PNG')} alt='img' />
                <h1 margin='20px'>버튼을 눌러 사진을 추가하세요</h1>
                <button className='font-semibold text-white bg-blue-500 rounded w-32 h-8' onClick={onImgInputBtnClick} type='button'>
                  컴퓨터에서 선택
                </button>
              </div>
            )}
          </div>
          <input
            type='file'
            // accept="image/*"
            ref={fileRef}
            className='hidden'
            hidden={true}
            onChange={handleFileOnChange}
            // onChange={(e) => encodeFileToBase64(e.target.files[0])}
            // ref={logoImgInput}
          />
        </div>
        <textarea type='text' className='w-full h-40 text-xl placeholder:text-base' placeholder='문구 입력...' value={body} name='body' onChange={onChangeBodyHandler}></textarea>
      </form>
    </div>
  );
}

export default ContentUpload;
