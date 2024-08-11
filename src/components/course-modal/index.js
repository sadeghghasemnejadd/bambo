import React from "react";
import { Link } from "react-router-dom";
import { COURSE_ROUTE } from "../../routes";
import Button from "../UI/Button";
import jsPic from "./../../assets/images/courses-banner/JavaScript-logo.png";

const CourseModal = ({ setModal, course }) => {
  const start = new Date(course.startDate);
  const end = new Date(course.endDate);
  const details = [
    {
      id: 0,
      title: "مدرس",
      value: course.teacher.fullName,
    },
    {
      id: 1,
      title: "ظرفیت",
      value: `${course.capacity} نفر`,
    },
    {
      id: 2,
      title: "تاریخ شروع",
      value: `${start.getFullYear()}/${start.getMonth() + 1}/${start.getDay()}`,
    },
    {
      id: 3,
      title: "تاریخ پایان",
      value: `${end.getFullYear()}/${end.getMonth() + 1}/${end.getDay()}`,
    },
    {
      id: 4,
      title: "قیمت",
      value: `${course.cost} تومان`,
      color: true,
    },
  ];

  return (
    <>
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="modal">
        <div className="modal__information">
          <img
            src={jsPic}
            alt={course.name}
            className="modal__information__image"
          />
          <div className="modal__information__details">
            <h2 className="modal__information__title">دوره {course.pName}</h2>
            {details.map((detail) => (
              <div key={detail.id} className="modal__information__option">
                <p>{detail.title} : </p>
                <p>{detail.value}</p>
              </div>
            ))}
            <div className="modal__information__progress">
              <p>وضغیت دوره : </p>
              <div
                className="modal__information__progress__bar"
                data-progress={course.capacity}
              >
                <div
                  className="modal__information__progress__bar--line"
                  style={{ width: `${course.capacity}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__button">
          <Button color="gray">
            <Link to={`${COURSE_ROUTE}/${course._id}`} state={{ data: course }}>
              مشاهده دوره
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default CourseModal;
