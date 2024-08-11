import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import gif from "../../assets/gifs/sheep.gif";
const NotFound = () => {
  return (
    <div className="container">
      <h1>خطای ۴۰۴</h1>
      <img src={gif} alt="" />
      <p >صفحه مورد نظر شما یافت نشد!</p>
      <Link to="/">
        <Button freeSize="false">بازگشت به صفحه اصلی</Button>
      </Link>
    </div>
  );
};

export default NotFound;
