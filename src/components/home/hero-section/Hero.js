import React from "react";
import { Link } from "react-router-dom";
import magnifying from "../../../assets/images/magnifying.svg";
import Button from "../../UI/Button";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1 className="hero__info__title">
          باید راه بهتری برای آموزش ساخته میشد ,<br />
          پس ما ساختیمش
        </h1>
        <div className="hero__info__about">
          <p className="hero__info__des">
            سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین
            آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم
            بتوانیم با راهکار های نوین ، فرصتی . برای افراد خواهان پیشرفت فراهم
            کنیم
          </p>
          <Link to="/courses">
            <Button color="secondary">مشاهده دوره ها</Button>
          </Link>
        </div>
      </div>
      <div className="hero__search">
        <img className="hero__search__icon" src={magnifying} alt="magnifying" />
        <input className="hero__search__input" placeholder="جستجو" />
      </div>
    </section>
  );
};

export default Hero;
