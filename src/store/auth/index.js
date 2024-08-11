import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload.token;
    },
    addStudentInfo: (state, action) => {
      state.studentModel = action.payload.studentModel;
    },
    logout: (state, action) => {
      return {};
    },
  },
});

export const { addToken, addStudentInfo, logout } = slice.actions;
export default slice.reducer;
