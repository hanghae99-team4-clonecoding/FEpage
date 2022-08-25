import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../api/cookie";

//http://43.200.177.45/api/post
//http://43.200.177.45/api/test/post
//http://43.200.177.45/api/test/post/profile
const initialState = {
  loading: false,
  myPosts: [],
  email: "",
  error: "",
};
//http://localhost:3001/post
const getMyPosts = createAsyncThunk("get/getMyPosts", async (thunkApi) => {
  try {
    const res = await axios({
      method: "get",
      url: `http://43.200.176.108/api/post/profile`,
      headers: {
        authorization: `Bearer ${getCookie("is_login")}`,
      },
    });
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
    console.log(error.data);
    return error.message;
  }
});

export const myPostSlice = createSlice({
  name: "myPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //!보여주기
    builder.addCase(getMyPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMyPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.myPosts = action.payload;
      state.email = action.payload[0].email;
      state.error = "";
    });
    builder.addCase(getMyPosts.rejected, (state, action) => {
      state.loading = false;
      state.myPosts = [];
      state.error = action.error.message;
    });
  },
});

export { getMyPosts };
