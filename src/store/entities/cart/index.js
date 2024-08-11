import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../../core/storage/storage.service";
const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      const cart = JSON.parse(getItem("cart"));
      cart.push(action.payload.course);
      setItem("cart", JSON.stringify(cart));
      state.push(action.payload.course);
    },
    removeCourse: (state, action) => {
      const cart = state.filter(
        (course) => course._id !== action.payload.courseId
      );
      setItem("cart", JSON.stringify(cart));
      return cart;
    },
    setCart: (state, action) => {
      return action.payload.cart;
    },
    emptyCart: (state, action) => {
      return [];
    },
  },
});

export const { addCourse, removeCourse, emptyCart,setCart } = slice.actions;
export default slice.reducer;

export const getCartLength = (state) => {
  return state.entities.cart.length;
};

export const getCartTotalPrice = (state) => {
  return state.entities.cart.reduce((prev, curr) => (prev += curr.cost), 0);
};

export const getIsCourseInCart = (state, id) => {
  console.log(state);
  console.log(state.entities.cart.some((course) => course._id === id));
  return state.entities.cart.some((course) => course._id === id);
};
