import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import LoginModal from "../components/Login"
import JoinModal from "../components/Join"
import { loginBgImg } from '../svg/login_bg.png';
// import Layout from "../components/common/layout";
// import Join from "../components/Join"


function AccessPage() {

  const [loginPopup, setLoginPopup] = useState(false);
  const [joinPopup, setJoinPopup] = useState(false);

  //로그인 모달창
  function openLoginModal() {
    console.log(loginPopup)
    if (loginPopup == false) {
      setLoginPopup(true)
    } else {
      setLoginPopup(false)
    }
  }

  //회원가입 모달창
  function openJoinModal() {
    if (joinPopup == false) {
      setJoinPopup(true)
    } else {
      setJoinPopup(false)
    }
  }

  const navigate = useNavigate()

  return (
    <div style={{ display: "flex" }}  >
      {loginPopup === false ? <></> : <LoginModal loginPopup={loginPopup} openLoginModal={openLoginModal} />}
      {joinPopup === false ? <></> : <JoinModal joinPopup={joinPopup} openJoinModal={openJoinModal} />}
      <img src='https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png' />
      <Title>
        <Titlecons>
          <FaTwitter size="24" color="#0095ED" />
        </Titlecons>
        <Top>
          <span>지금 일어나고 있는 일</span>
        </Top>

        <Middle>
          <span>오늘 트위터에 가입하세요</span>
        </Middle>

        <GoogleBtn>
          <button style={{
            width: '274px',
            height: '38px',
            margin: '-15px ',
            backgroundColor: '#fff',
            fontColor: 'black',
            borderColor: '#eee'
          }} onClick={() => navigate('/')}>
            <Ic>
              <FcGoogle size="24"></FcGoogle>
            Google 계정으로 가입하기(구현X)
            </Ic>
          </button>
        </GoogleBtn>

        <button style={{
          width: '274px',
          height: '38px',
          margin: '15px',
          backgroundColor: '#fff',
          fontColor: 'black',
          borderColor: '#eee'
        }} onClick={() => navigate('/')}>
          Apple에서 가입하기(구현X)
        </button>
        apple에서 가입하기(구현X)

        <p style={{ marginLeft: "120px" }}>또는</p>

        <button style={{
          width: '274px',
          height: '38px',
          margin: '10px',
          backgroundColor: '#0095ED',
          fontColor: 'white',
          borderColor: '#000'
        }} onClick={openJoinModal}>이메일 주소로 가입하기</button>

        <Agree>가입하시려면 쿠키 사용을 포함해 이용약관과 개인정보 처리방침에 동의해야 합니다.</Agree>

        <IsJoin>이미 트위터에 가입하셨나요?</IsJoin>
        <button style={{
          width: '274px',
          height: '38px',
          margin: '14px',
          backgroundColor: '#fff',
          fontColor: '#0095ED'
        }} onClick={openLoginModal}> 로그인 </button>

      </Title>
    </div>
  )

}

export default AccessPage;

const Title = styled.div`
  text-align: left;
  margin: 150px 20px;
  position: relative;
`;
const Logo = styled.img`
  background-size: cover;
  height: 100%;
  width: 20px; 
`;

const Top = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
`;

const Middle = styled.div`
  margin: 30px 0;
  font-weight: bold;
  font-size: 2rem;
`;
const Agree = styled.p`
  width: 240px;
  height: 10px;
  margin-left: 10px;
  font-size: 3px;
`;

const IsJoin = styled.p`
  margin-top: 40px`;

const Ic = styled.div`
  display:inline-block ;
  position:relative;
  bottom:15px;
  left:0px;`

const Titlecons = styled.div`
  display: inline-block;
  position:relative;
  bottom:50px;`

const GoogleBtn = styled.div`
  margin-left:30px;`

