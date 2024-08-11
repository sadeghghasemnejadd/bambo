import Button from "../../UI/Button";
import { addCourse, getIsCourseInCart } from "../../../store/entities/cart";
import { useDispatch, useSelector } from "react-redux";
import { getItem, setItem } from "../../../core/storage/storage.service";
import jsPic from "./../../../assets/images/courses-banner/JavaScript-logo.png";

const Detail = ({ data }) => {
  console.log(data);
  const state = useSelector((state) => state);
  const token = state.auth.token;
  const isCourseInCart = getIsCourseInCart(state, data._id);
  const dispatch = useDispatch();
  const addCoursetoCartHandler = () => {
    dispatch(
      addCourse({
        course: { _id: data._id, name: data.pName, cost: data.cost },
      })
    );
  };
  return (
    <div className="detail-section">
      <div className="detail-section__description">
        <h2 className="detail-section__heading">توضیحات:</h2>
        <p>{data.detail}</p>
      </div>
      <div className="card">
        <div className="card__header">
          <img src={jsPic} alt={data.title} className="card__logo" />
          <h3 className="card__heading">دوره {data.pName}</h3>
        </div>
        <div className="card__body">
          <div className="card__price">
            <span>قیمت دوره:</span>
            <span>{data.cost} تومان</span>
          </div>
          <div className="card__discount">
            <span>تخفیف:</span>
            <span>10%</span>
          </div>
          <div className="card__remain-price">
            <span>مبلغ قابل پرداخت:</span>
            <span>{data.cost - (data.cost * 10) / 100} تومان</span>
          </div>
          <div className="card__gray-boxes">
            <span className="card__gray-box"></span>
            <span className="card__gray-box"></span>
            <span> : </span>
            <span className="card__gray-box"></span>
            <span className="card__gray-box"></span>
            <span>&nbsp;:&nbsp;</span>
            <span className="card__gray-box"></span>
            <span className="card__gray-box"></span>
          </div>
          <div className="div">
            {isCourseInCart ? (
              <Button freeSize="false" color="tertiary" disabled={true}>
                دوره به سبد خرید شما اضافه شده است.
              </Button>
            ) : !token ? (
              <Button
                freeSize="false"
                color="tertiary"
                onClick={addCoursetoCartHandler}
                disabled={true}
              >
                برای ثبت‌نام وارد حساب خود شوید.{" "}
              </Button>
            ) : (
              <Button
                freeSize="false"
                color="tertiary"
                onClick={addCoursetoCartHandler}
              >
                ثبت‌نام در دوره
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
