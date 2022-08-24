import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJoin } from "../redux/modules/joinSlice";

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
      <div className="divCloseBtn">
        <button className="closeBtn" onClick={openJoinModal}>
          X
        </button>
      </div>
      <form
        onSubmit={onSubmitHandler}
        style={{
          background: "white",
          height: "70vh",
          width: "50vw",
        }}
      >
        <div className="InputBox">
          <p>가입하기</p>
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
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="divLoginBtn">
          <button className="loginBtn" type="submit">
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default JoinModal;
