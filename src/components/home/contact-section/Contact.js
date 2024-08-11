import Button from "../../UI/Button";
import pic from "../../../assets/images/contact-img.jpg";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import { contactUsApi } from "../../../core/api";
import { useState } from "react";
import Alert from "../../UI/Alert";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const { run, updateLoading } = useAxios({
    url: contactUsApi,
    method: "post",
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
          message: res.data?.message?.[0]?.message,
          success: true,
        });
        reset();
        setTimeout(() => {
          setAlertState({
            ...alertState,
            show: false,
            success: null,
          });
        }, 3000);
      })
      .catch((error) => {
        setAlertState(() => ({
          show: true,
          message: error.response?.data?.message?.message?.[0].message || "ارسال پیام با خطا مواجه شد.",
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
      required: true,
      placeholder: "ایمیل خود را وارد کنید...",
      messageRequired: "لطفا ایمیل خود را وارد کنید.",
      messagePattern: "لطفا ایمیل معتبر وارد کنید.",
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
    {
      id: 1,
      type: "text",
      name: "text",
      required: true,
      messageRequired: "لطفا متن خود را وارد کنید.",
      placeholder: "متن خود را وارد کنید...",
    },
  ];
  return (
    <section className="contact">
      <img className="contact__img" src={pic} alt="laptop reading" />
      <div className="contact__form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact__form__container"
        >
          {alertState.show && (
            <Alert success={alertState.success}>{alertState.message}</Alert>
          )}
          <h2 className="contact__form__header">پیشنهاد وانتقاد</h2>
          {formData.map((inp) => (
            <div key={inp.id}>
              <input
                className="input input--block input--secondary"
                type={inp.type}
                name={inp.name}
                placeholder={inp.placeholder}
                {...register(inp.name, {
                  required: {
                    value: inp.required,
                    message: inp.messageRequired,
                  },
                  pattern: { value: inp.pattern, message: inp.messagePattern },
                })}
              />
              <p className="contact__form__validation">
                {errors[inp.name]?.message}
              </p>
            </div>
          ))}
          <div className="contact__button">
            <Button color="main" disabled={!isValid}>
              {updateLoading ? <div className="loader"></div> : "ارسال"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
