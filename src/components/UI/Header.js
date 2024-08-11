import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BiLogOut } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addStudentInfo, addToken, logout } from "../../store/auth";
import { getItem, removeItem } from "../../core/storage/storage.service";
import store from "../../store";
import useAxios from "../../hooks/useAxios";
import { getStudnetByIdApi } from "../../core/api";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../routes";
import { getCartLength, setCart,emptyCart } from "../../store/entities/cart";

const Header = ({ absolute }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getItem("token");
  const cart = JSON.parse(getItem("cart"));
  const cartHandler = () => {
    navigate(SHOP_ROUTE);
  };
  const { run } = useAxios({
    url: getStudnetByIdApi + (token && jwt_decode(token)._id),
    headers: {
      "X-Auth-Token": token,
    },
  });

  useEffect(() => {
    if (token) {
      run()
        .then((res) => {
          dispatch(addStudentInfo({ studentModel: res.data.result }));
          dispatch(addToken({ token }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!Array.isArray(cart)) {
      dispatch(emptyCart());
    }
    else if (cart.length !== 0) {
      dispatch(setCart({ cart: cart }));
    }
  }, []);
  const state = useSelector((state) => state);
  const cartLength = getCartLength(state);
  const logoutHandler = () => {
    removeItem("token");
    removeItem("cart");
    store.dispatch(logout());
  };

  const links = [
    { id: "1", name: "دوره ها", url: "/courses" },
    { id: "2", name: "مقالات", url: "/home" },
    { id: "3", name: "خدمات", url: "/home" },
    { id: "4", name: "درباره ما", url: "/home" },
  ];
  return (
    <header className={`header ${absolute ? "header--absolute" : ""}`}>
      <h1 className="header__title">بامبو</h1>
      <nav className="header__links">
        <ul className="header__links--link">
          {links.map((link) => (
            <li key={link.id} className="header__links--link-item">
              <Link className="header__links--link-item-link" to={link.url}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__login">
        {state.auth.token ? (
          <div className="header__login__icons">
            <div
              className={`header__login__cart ${
                cartLength ? "header__login__cart--green" : ""
              }`}
            >
              {cartLength ? <span>{cartLength}</span> : <></>}
              <FiShoppingCart
                color="white"
                size={20}
                cursor="pointer"
                onClick={cartHandler}
              />
            </div>
            <BiLogOut
              color="white"
              size={20}
              onClick={logoutHandler}
              cursor="pointer"
            />
          </div>
        ) : (
          <>
            <Button color="transparent" freeSize={true} opacity={true}>
              <Link to="/login">ورود</Link>
            </Button>
            <Button color="transparent" freeSize={true} opacity={true}>
              <Link to="/register">ثبت نام</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
