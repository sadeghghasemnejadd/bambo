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
import * as api from "../../core/api";
import * as routes from "../../routes";
import { useNavigate } from "react-router-dom";
import Alert from "../UI/Alert";
export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [alertState, setAlertState] = useState({
    show: false,
    message: "",
    success: null,
  });
  const navigate = useNavigate();
  const { updateLoading, run } = useAxios({
    method: "post",
    url: api.registerApi,
  });

  const onSubmit = (e) => {
    run({ ...e, profile: "image.png" })
      .then((res) => {
        setAlertState({
          show: true,
          message: "ثبت نام با موفقیت انجام شد",
          success: true,
        });
        setTimeout(() => {
          setAlertState({
            ...alertState,
            show: false,
            success: null,
          });
          navigate(routes.LOGIN_ROUTE);
        }, 3000);
      })

      .catch((error) => {
        setAlertState(() => ({
          ...alertState,
          show: true,
          message: error.response?.data?.message?.[0]?.message,
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
      type: "text",
      name: "fullName",
      placeholder: "نام کاربری :",
      messageRequired: "لطفا نام کاربری خود را وارد کنید.",
      minLength: 3,
      required: true,
      messageLength: "تعداد کاراکتر های نام کاربری نمی تواند کمتر از 3 باشد.",
    },
    {
      id: 1,
      type: "email",
      name: "email",
      placeholder: "ایمیل:",
      required: true,
      messageRequired: "لطفا ایمیل خود را وارد کنید.",
      messagePattern: "لطفا ایمیل معتبر وارد کنید.",
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
    {
      id: 2,
      type: "number",
      name: "phoneNumber",
      placeholder: "شماره موبایل:",
      required: true,
      pattern: /^(\+98|0)?9\d{9}$/,
      messageRequired: "لطفا شماره موبایل خود را وارد کنید.",
      messagePattern: "شماره موبایل معتبر نمی باشد.",
    },
    {
      id: 3,
      type: "number",
      name: "nationalId",
      placeholder: "شماره ملی:",
      pattern: /^[0-9]{10}$/,
      required: true,
      messageRequired: "لطفا شماره ملی خود را وارد کنید.",
      messagePattern: "شماره ملی معتبر نمی باشد.",
    },
    {
      id: 4,
      type: "date",
      name: "birthDate",
      placeholder: "تاریخ تولد:",
      required: true,
      messageRequired: "لطفا تاریخ تولد خود را وارد کنید.",
    },
    {
      id: 5,
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
    <section className="register">
      {/* image section */}
      <div className="register__img">
        <div className="register__img__contact">
          <div className="register__img__contact__name">
            <h2 className="title--secondary register__img__contact__name__title">
              آکادمی آموزشی بامبو
            </h2>
            <img src={logo} className="icon media__img" alt="bamboo logo" />
          </div>
          <div className="register__img__contact__icons">
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
        <Link to="/home" href="" className="register__img__home">
          <img src={home} className="icon" alt="home icon" />
        </Link>
      </div>
      {/* form section */}
      <div className="register__form">
        {alertState.show && (
          <Alert success={alertState.success}>{alertState.message}</Alert>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="register__form--container"
        >
          <h2 className="title--primary">ثبت نام</h2>

          {formData.map((data) => (
            <div className="register__form__input" key={data.id}>
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
              <p className="register__form__validation">
                {errors[data.name]?.message}
              </p>
            </div>
          ))}

          <div className="register__form__btn--container">
            <Button color="secondary" freeSize={false}>
              <Link to="/login" className="link link--secondary btn__link">
                ورود
              </Link>
            </Button>
            <Button color="main" freeSize={false} disabled={!isValid}>
              {updateLoading ? <div className="loader"></div> : "ثبت نام"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
