import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//! const entities = useSelector((state) => state.posts)
const initialState = {
  스테: [],
  loading: false,
};

const get작명 = createAsyncThunk(
  //action type string
  "get/get작명",
  // callback function
  async (thunkAPI) => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts").then(
      (data) => data.json()
    );
    return res;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const postReducer = postSlice.reducer;
