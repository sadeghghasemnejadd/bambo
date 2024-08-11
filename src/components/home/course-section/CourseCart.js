import React from "react";
import Button from "../../UI/Button";
const CourseCart = ({ img, buttonText, alt, onClick }) => {
  return (
    <div className="course-cart">
      <img src={img} alt={alt} className="course-cart__image" />
      <Button color="secondary" onClick={() => onClick()}>
        دوره {buttonText}
      </Button>
    </div>
  );
};

export default CourseCart;
