import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJoin } from "../redux/modules/joinSlice";
import { FaTwitter, FaApple } from "react-icons/fa"
import styles from "../css_modules/Join.module.css"

function JoinModal({ joinPopup, openJoinModal }) {
  const dispatch = useDispatch();
  console.log(joinPopup);
  const initialState = {
    email: "",
    password: "",
    passwordCheck: "",
  };
  const [joinData, setJoinData] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setJoinData({ ...joinData, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(joinData);
    dispatch(addJoin(joinData));
  };
  console.log(joinData);

  const navigate = useNavigate()


  return (
    <div className={styles.modalBg}> {/* 모달 배경 */}
      <div className={styles.modal}> {/* 모달 사이즈 */}
        <div className="divCloseBtn">
          <button className="closeBtn" onClick={openJoinModal}>
            X
          </button>
        </div>
        <form className={styles.formWarp} onSubmit={onSubmitHandler} >
          <div className={styles.inputBox}>
            <h2>가입하기</h2>
            <div className={styles.inputWarp}>
              <label>이메일</label>
              <input
                type="email"
                name="email"
                value={joinData.email}
                onChange={onChangeHandler}
                placeholder="이메일 주소를 입력하세요"
              />
              <label>패스워드</label>
              <input
                type="password"
                name="password"
                value={joinData.password}
                onChange={onChangeHandler}
                placeholder="비밀번호를 입력하세요"
              />
              <label>패스워드 확인</label>
              <input
                type="password"
                name="passwordCheck"
                value={joinData.passwordCheck}
                onChange={onChangeHandler}
                placeholder="다시 한번 비밀번호를 입력하세요"
              />
              <div className="divLoginBtn">
                <button className="loginBtn" type="submit" onClick={() => navigate('/')}>
                  가입하기
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
}

export default JoinModal;
