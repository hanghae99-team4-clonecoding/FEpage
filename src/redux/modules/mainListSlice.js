import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api";
import { getCookie, setCookie } from "../../api/cookie";

//http://43.200.177.45/api/post
//http://43.200.177.45/api/test/post
//http://43.200.177.45/api/test/post/profile
const initialState = {
  loading: false,
  posts: [],
  email: [],
  error: "",
};

const getPosts = createAsyncThunk(
  "get/getPosts",
  async ({ page, setError }) => {
    try {
      const res = await axios({
        method: "get",
        url: `http://43.200.176.108/api/post?page=${page}`,
        headers: {
          authorization: `Bearer ${getCookie("is_login")}`,
        },
      });
      // api("/test/post");
      console.log("response", res.data.data);
      if (res.data.data === undefined) {
        setError(true);
      }
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const likes_handler = createAsyncThunk(
  "get/likes_handler",
  async (postId) => {
    try {
      const res = await axios({
        method: "post",
        url: `http://43.200.177.45/api/test/like/${postId}`,
        headers: {
          authorization: `Bearer ${getCookie("is_login")}`,
        },
      });
      console.log(postId);
      // api("/test/post");
      console.log("response", res);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

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
      state.posts = [...state.posts, ...action.payload];
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
