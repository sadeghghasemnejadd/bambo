import React, { useState } from "react";
import Button from "./../UI/Button";
import whatsappImage from "./../../assets/images/whatsapp.svg";
import telegramImage from "./../../assets/images/telegram.svg";
import youtubeImage from "./../../assets/images/youtube.svg";
import instagramImage from "./../../assets/images/instagram.svg";
import etehadieh from "./../../assets/images/etehadieh.jpg";
import enamd from "./../../assets/images/e-namad.jpg";
import resane from "./../../assets/images/resaneh-digital.jpg";
function FooterSection() {
  const [input, setInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  const formData = [
    {
      id: 0,
      type: "email",
      name: "email",
      value: input.email || "",
      placeholder: "ایمیل خود را وارد کنید...",
    },
  ];
  return (
    <section className="footer-section">
      <div className="footer-section__top">
        <div className="footer-section__top__right">
          <h4 className="footer-section__top__right__title">درباره بامبو</h4>
          <p className="footer-section__top__right__paragraph">
            بامبو یکی از پر تلاش ترین و بروز ترین وب سایت های آموزشی در سطح
            ایران <br />
            است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و<br />
            دوره های آموزشی را در اختیار علاقه مندان ایرانی قرار دهد
          </p>
        </div>

        <div className="footer-section__top__left">
          <form
            onSubmit={handleSubmit}
            className="footer-section__top__left__form"
          >
            <h4 className="footer-section__top__left__form__title">خبرنامه</h4>
            {formData.map((inp, index) => (
              <input
                key={index}
                className="footer-section__top__left__form__input"
                type={inp.type}
                name={inp.name}
                value={inp.value}
                placeholder={inp.placeholder}
                onChange={handleChange}
              />
            ))}
            <span className="footer-section__top__left__form__button">
              <Button type="submit" color="#002c38" textSize="large">
                عضویت
              </Button>
            </span>
          </form>
        </div>
      </div>

      <div className="footer-section__mid">
        <div className="footer-section__mid__right">
          <h4 className="footer-section__mid__right__title">ارتباط با ما</h4>
          <p className="footer-section__mid__right__firstEmail">
            iwillbemyvision@gmail.com
          </p>
          <p className="footer-section__mid__right__secondEmail">
            amir.azhkan@yahoo.com
          </p>
          <div className="footer-section__mid__right__icons">
            <img
              className="footer-section__mid__left__icons__whatsapp"
              alt="Whatsapp-icon"
              src={whatsappImage}
            />
            <img
              className="footer-section__mid__left__icons__telegram"
              alt="telegram-icon"
              src={telegramImage}
            />
            <img
              className="footer-section__mid__left__icons__youtube"
              alt="youtube-icon"
              src={youtubeImage}
            />
            <img
              className="footer-section__mid__left__icons__instagram"
              alt="instagram-icon"
              src={instagramImage}
            />
          </div>
        </div>

        <div className="footer-section__mid__center">
          <h4 className="footer-section__mid__center__title">همراه باشید</h4>
          <div className="footer-section__mid__center__firstlink">
            سوالات رایج
          </div>
          <div className="footer-section__mid__center__secondlink">قوانین</div>
          <div className="footer-section__mid__center__thirdlink">خدمات</div>
        </div>

        <div className="footer-section__mid__left">
          <img
            className="footer-section__mid__left__imgRight"
            alt="etehadieImage"
            src={etehadieh}
          />
          <img
            className="footer-section__mid__left__imgCenter"
            alt="e-namadImage"
            src={enamd}
          />
          <img
            className="footer-section__mid__left__imgLeft"
            alt="resaneh-digitalImage"
            src={resane}
          />
        </div>
      </div>

      <div className="footer-section__bottom">
        <p className="footer-section__bottom__text">
          کلیه حقوق محصولات و محتوای این سایت متعلق به{" "}
          <span className="footer-section__bottom__text__highlight">
            {" "}
            بامبو{" "}
          </span>
          می باشد و هرگونه کپی برداری از محتوا و محصولات سایت غیرمجاز و بدون
          رضایت ماست
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
