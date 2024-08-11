import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import telegram from "./../../assets/images/telegram.svg";
import whatsapp from "./../../assets/images/whatsapp.svg";
import home from "./../../assets/images/home.svg";
import instagram from "./../../assets/images/instagram.svg";
import youtube from "./../../assets/images/youtube.svg";
import logo from "./../../assets/images/logo.svg";
import useAxios from "../../hooks/useAxios";
import { loginApi } from "../../core/api";
import Alert from "../UI/Alert";
import { setItem } from "../../core/storage/storage.service";
import * as routes from "../../routes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const { updateLoading, run } = useAxios({
    method: "post",
    url: loginApi,
  });
  const [alertState, setAlertState] = useState({
    show: false,
    message: "",
    success: null,
  });

  const onSubmit = (data) => {
    run(data)
      .then((res) => {
        setAlertState({
          show: true,
          message: "شما با موفقیت وارد شدید",
          success: true,
        });
        const token = res.data.result.jwtToken;
        setItem("token", token);
        setItem("cart", JSON.stringify([]));
        dispatch(
          addToken({
            token: res.data.result.jwtToken,
          })
        );
        setTimeout(() => {
          setAlertState({
            ...alertState,
            show: false,
            success: null,
          });
          navigate(routes.HOME_ROUTE);
        }, 3000);
      })
      .catch((error) => {
        setAlertState(() => ({
          show: true,
          message: error.response?.data?.message?.message?.[0].message,
          success: false,
        }));
        setTimeout(() => {
          setAlertState({
            ...alertState,
            show: false,
            success: null,
          });
        }, 3000);
      });
  };
  const formData = [
    {
      id: 0,
      type: "email",
      name: "email",
      placeholder: "ایمیل:",
      required: true,
      messageRequired: "لطفا ایمیل خود را وارد کنید.",
      messagePattern: "لطفا ایمیل معتبر وارد کنید.",
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
    {
      id: 1,
      type: "password",
      name: "password",
      placeholder: "رمز عبور:",
      minLength: 8,
      required: true,
      messageRequired: "لطفا رمز عبور خود را وارد کنید.",
      messageLength: "تعداد کاراکتر های رمز عبور نمی تواند کمتر از 8 باشد.",
    },
  ];

  return (
    <section className="login">
      {/* image section */}
      <div className="login__img">
        <div className="login__img__contact">
          <div className=" login__img__contact__name">
            <h2 className="title--secondary login__img__contact__name__title">
              آکادمی آموزشی بامبو
            </h2>
            <img src={logo} className="icon" alt="bamboo logo" />
          </div>
          <div className="login__img__contact__icons">
            <a href="#demo">
              <img src={youtube} className="icon" alt="youtube icon" />
            </a>
            <a href="#demo">
              <img src={whatsapp} className="icon" alt="whatsapp icon" />
            </a>
            <a href="#demo">
              <img src={telegram} className="icon" alt="telegram icon" />
            </a>
            <a href="#demo">
              <img src={instagram} className="icon" alt="instagram icon" />
            </a>
          </div>
        </div>
        <Link to="/home" href="" className="login__img__home">
          <img src={home} className="icon" alt="home icon" />
        </Link>
      </div>
      {/* form section */}
      <div className="login__form">
        {alertState.show && (
          <Alert success={alertState.success}>{alertState.message}</Alert>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login__form--container"
        >
          <div className="login__form__title">
            <h2 className="title--primary">ورود کاربر</h2>
            <Link to="/home" href="">
              <img src={home} className="icon" alt="home icon" />
            </Link>
          </div>
          {formData.map((data) => (
            <div key={data.id}>
              <input
                className="input--primary input input--block"
                type={data.type}
                name={data.name}
                placeholder={data.placeholder}
                {...register(data.name, {
                  required: {
                    value: data.required,
                    message: data.messageRequired,
                  },
                  minLength: {
                    value: data.minLength,
                    message: data.messageLength,
                  },
                  pattern: {
                    value: data.pattern,
                    message: data.messagePattern,
                  },
                })}
              />
              <p className="login__form__validation">
                {errors[data.name]?.message}
              </p>
            </div>
          ))}

          <div className="login__form__extra">
            <label className="checkbox checkbox--primary">
              من را به خاطر بسپار
              <input type="checkbox" />
            </label>
            <Link to="/reset-pass" className=" link--secondary link">
              فراموشی رمز
            </Link>
          </div>

          <div className="login__form__btn--container">
            <Button color="secondary" freeSize={false}>
              <Link to="/register" className="link link--main btn__link">
                ثبت نام
              </Link>
            </Button>
            <Button color="main" freeSize={false} disabled={!isValid}>
              {updateLoading ? <div className="loader"></div> : "ورود"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
