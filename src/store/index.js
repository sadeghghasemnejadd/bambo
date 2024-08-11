import authReducer from "./auth";
import entitiesReducer from "./entities";
import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./course";

export default configureStore({
  reducer: {
    auth: authReducer,
    entities: entitiesReducer,
    course: courseSlice,
  },
});
