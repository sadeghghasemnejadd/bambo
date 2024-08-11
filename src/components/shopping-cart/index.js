import React, { useEffect } from "react";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { MdRemoveCircleOutline } from "react-icons/md";
import {
  getCartTotalPrice,
  removeCourse,
  emptyCart,
} from "../../store/entities/cart";
import { removeItem, setItem } from "../../core/storage/storage.service";
function ShoppingCart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const totalPrice = getCartTotalPrice(state);

  const onClickHandler = () => {
    dispatch(emptyCart());
    setItem("cart", JSON.stringify([]));
  };
  const removeHandler = (id) => {
    dispatch(removeCourse({ courseId: id }));
  };

  return (
    <div className="shopping-cart__contianer">
      {state.entities.cart.length ? (
        <>
          {" "}
          <ul className="shopping-cart__items">
            {state.entities.cart.map((course) => (
              <li className="shopping-cart__item" key={course._id}>
                <span>{`${course.name}:  ${course.cost}تومان`}</span>
                <MdRemoveCircleOutline
                  cursor="pointer"
                  onClick={() => {
                    removeHandler(course._id);
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="shopping-cart__payment">
            <span>مبلغ کل: {totalPrice} تومان</span>
            <Button color="tertiary" onClick={onClickHandler}>
              پرداخت
            </Button>
          </div>
        </>
      ) : (
        <p>سبد خرید شما خالی است!</p>
      )}
    </div>
  );
}

export default ShoppingCart;
