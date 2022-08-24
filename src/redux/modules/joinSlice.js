import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { getCookie } from "../../api/cookie";

const initialState = {
  joinData: [],
  error: "",
};

//! post 회원정보 전송
export const addJoin = createAsyncThunk("post/addPost", async (joinData) => {
  try {
    const response = await axios.post(
      `http://43.200.176.108/api/signup`,
      joinData
    );
    console.log(joinData);
    alert("가입해주셔서 감사합니다.");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.response.data.errorMessage);
    return error.code;
  }
});

const joinSlice = createSlice({
  name: "joinData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //! 회원정보 전송
    builder.addCase(addJoin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addJoin.fulfilled, (state, action) => {
      state.loading = false;
      state.joinData = action.payload;
      state.error = "";
    });
    builder.addCase(addJoin.rejected, (state, action) => {
      state.loading = false;
      state.joinData = [];
      state.error = action.error.message;
    });
  },
});

export { joinSlice };
export const joinReducer = joinSlice.reducer;
