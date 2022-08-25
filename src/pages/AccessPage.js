import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaTwitter, FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import LoginModal from "../components/Login"
import JoinModal from "../components/Join"
import { loginBgImg } from '../svg/login_bg.png';
import styles from "../css_modules/accessPage.module.css"
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
  // witdh 영역 2개 60 % 40퍼 주기

  const navigate = useNavigate()

  return (
    <div style={{ display: "flex" }}  >
      {loginPopup === false ? <></> : <LoginModal loginPopup={loginPopup} openLoginModal={openLoginModal} />}
      {joinPopup === false ? <></> : <JoinModal joinPopup={joinPopup} openJoinModal={openJoinModal} />}
<<<<<<< HEAD
=======
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
>>>>>>> 5a5210594f1a04bb0b31019e0e96643064b1bd7a

      <div style={
        {
          width: "60%",
          height: "100vh",
          backgroundImage: "url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)"
        }
      } >
        <div style={
          {
            height: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          {/*왼쪽 twitter svg */}
          <FaTwitter size="400" color="#FFFFFF" />
        </div>
        {/* <img
          style={{
            position: 'absolute',
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          }}
          src='https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png' /> */}
      </div>
      {/* -------------------------------------------- 오른쪽 시작--------------------------------------------------------- */}

      <div className={styles.rightContaner}>
        <FaTwitter className={styles.logo} size="70" color="#0095ED" />
        <h2>지금 일어나고 있는 일</h2>

        <div className={styles.mainWarp}>
          <h3>오늘 트위터에 가입하세요.</h3>
          <div className={styles.accessWarp}>

            <div className={styles.btnWarp}>
              <button onClick={() => navigate('/')}>
                <FcGoogle size="20"></FcGoogle>
                Google 계정으로 가입하기
              </button>
            </div>

            <div className={`${styles.btnWarp} ${styles.marginBtn}`} >
              <button onClick={() => navigate('/')}>
                <FaApple size="20"></FaApple>
                Apple에서 가입하기
              </button>
            </div>

            <p className={styles.Or}>또는</p>

            <div className={`${styles.btnWarp} ${styles.marginBtn}`} >
              <button onClick={openJoinModal}>이메일 주소로 가입하기</button>
            </div>

            <p className={styles.terms}>가입하시려면 쿠키 사용을 포함해 이용약관과 개인정보 처리방침에 동의해야 합니다.</p>

            <p className={styles.ruJoin}>이미 트위터에 가입하셨나요?</p>
            <div div className={styles.btnWarp} >
              <button onClick={openLoginModal}> 로그인 </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AccessPage;