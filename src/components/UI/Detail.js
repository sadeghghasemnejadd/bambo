import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { COURSES_ROUTE } from "../../routes"; 
const Detail = ({ title, text, buttonText }) => {
  return (
    <div className="detail">
      <h1 className="detail__title">{title}</h1>
      <p className="detail__text">{text}</p>
      <div className="detail__button">
        <Link to={COURSES_ROUTE}>
          <Button color="main">{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
