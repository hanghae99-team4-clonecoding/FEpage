import { useState } from "react";
import { loginDb } from "../redux/modules/loginSlice";
import { useDispatch } from "react-redux";

function LoginModal({ loginPopup, openLoginModal }) {
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
    dispatch(loginDb(userData));
  };
  console.log(userData);

  return (
    <div
      style={{
        background: "rgba(0,0,0,0.1)",
        height: "1090px",
        width: "1024px",
        zIndex: 999,
        position: "absolute",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: "70vh",
          width: "50vw",
        }}
      >
        <div className="divCloseBtn">
          <button className="closeBtn" onClick={openLoginModal}>
            X
          </button>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="InputBox">
            <p>트위터에 로그인하기</p>
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={onChangeHandler}
              placeholder="이메일 주소를 입력하세요"
            />
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
            <button className="loginBtn" type="submit">
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
