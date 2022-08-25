import { useState } from "react";
import { loginDb } from "../redux/modules/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../css_modules/login.module.css"

function LoginModal({ loginPopup, openLoginModal }) {
  const navigate = useNavigate();
  console.log(loginPopup);
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(loginDb({ navigate, userData }));
  };
  console.log(userData);

  return (
    <div className={styles.modalBg}> {/* 모달 배경 */}
      <div className={styles.modal}> {/* 모달 사이즈 */}
        <div className="divCloseBtn">
          <button className={styles.closeBtn} onClick={openLoginModal}>
            X
          </button>
        </div>

        <form className={styles.formWarp} onSubmit={onSubmitHandler}>
          <div className={styles.inputBox}>
            <h2>로그인하기</h2>
            <div className={styles.inputWarp}>
              <label>이메일</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={onChangeHandler}
                placeholder="이메일 주소를 입력하세요"
              />
            </div>
            <div className={styles.inputWarp} >
              <label>패스워드</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={onChangeHandler}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div className="divLoginBtn">
              <button className="loginBtn" type="submit" onClick={() => navigate('/Home')}>
                로그인하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
