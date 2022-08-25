import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../api/cookie";
import api from "../../api/api";

const initialState = {
  loading: false,
  loginDb: [],
  token: "",
  email: "",
  error: "",
};

//! 로그인,  아이디랑 비밀번호 보내기
export const loginDb = createAsyncThunk(
  "post/loginDb",
  async ({ navigate, userData }) => {
    try {
      const response = await axios.post(
        `http://43.200.176.108/api/login`,
        userData
      );
      console.log(response.data);
      const accessToken = response.data.token;
      setCookie("is_login", `${accessToken}`);
      alert("환영합니다.");
      localStorage.setItem("email", response.data.email);
      navigate("/home");
      return response.data;
    } catch (error) {
      console.log(userData);
      console.log(error.response.data.error);
      alert(error.response.data.error);
      return error.code;
    }
  }
);

const loginSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 회원정보 전송시
    builder.addCase(loginDb.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginDb.fulfilled, (state, action) => {
      state.loading = false;
      state.loginDb = action.payload.token;
      state.email = action.payload.email;
      //state에 토큰저장
      state.error = "";
    });
    //!rejected시 처리 어떻게 해야할까
    builder.addCase(loginDb.rejected, (state, action) => {
      state.loading = false;
      state.loginDb = [];
      state.error = action.error.message;
    });
  },
});

export { loginSlice };
export const loginReducer = loginSlice.reducer;
