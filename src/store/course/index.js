import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllCourses = createAsyncThunk(
  "getAllCourses",
  async (values) => {
    try {
      const result = await axios.get("http://localhost:5000/api/course/getall");
      return result.data;
    } catch (err) {
      throw err;
    }
  }
);
const allCourses = (res) => res.payload.result;
export const courseSlice = createSlice({
  name: "course",
  initialState: { loading: false, courses: [] },
  reducers: {
    findCourseById: (state, action) => {
      state.course = state.courses.find((c) => c._id === action.payload.id);
    },
  },
  extraReducers: {
    [getAllCourses.pending]: (state) => {
      state.loading = true;
    },
    [getAllCourses.fulfilled]: (state, action) => {
      state.loading = false;
      state.courses = allCourses(action);
    },
    [getAllCourses.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default courseSlice.reducer;
