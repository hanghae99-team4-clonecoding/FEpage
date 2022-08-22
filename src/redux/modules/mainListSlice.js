import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api";

//http://43.200.177.45/api/post
//http://43.200.177.45/api/test/post
//http://43.200.177.45/api/test/post/profile
const initialState = {
  loading: false,
  posts: [],
  email: [],
  error: "",
};

const getPosts = createAsyncThunk("get/getPosts", async (thunkApi) => {
  try {
    const res = await // axios.get(`http://43.200.177.45/api/test/post`);
    api("/test/post");
    return res.data.data;
  } catch (error) {
    return error.message;
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //!보여주기
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      //!무한스크롤시 push로 바꿔주기
      state.posts = action.payload;
      // state.email = action.payload.map((x) => x.email);
      state.error = "";
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export { getPosts };
