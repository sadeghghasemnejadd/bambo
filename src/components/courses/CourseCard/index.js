import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import CourseModal from "../../course-modal";
import jsPic from "./../../../assets/images/courses-banner/JavaScript-logo.png";

import { COURSE_ROUTE } from "../../../routes";
function CourseCard(props) {
  const [showModal, setShowModal] = useState(false);
  const detailHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="courses__card">
        <div className="courses__card--img">
          <img src={jsPic} alt={props.alt} />
        </div>
        <div className="courses__card--topic">
          <h3>{props.topic}</h3>
        </div>
        <div className="courses__card--teacher">مدرس : {props.teacher}</div>
        <div className="courses__card--extra">
          <div className="courses__card--capacity">
            ظرفیت : {props.capacity}
          </div>
          <a
            href="#de"
            onClick={detailHandler}
            className="courses__card--dtails"
          >
            جزئیات
          </a>
        </div>
        <div className="courses__card--price">
          <span>تومان</span>
          {props.cost}
        </div>
        <Link
          to={`${COURSE_ROUTE}/${props.allData._id}`}
          state={{ data: props.allData }}
          className="courses__card--seebtn"
        >
          مشاهده دوره
        </Link>
      </div>
      {showModal &&
        createPortal(
          <CourseModal setModal={setShowModal} course={props.allData} />,
          document.body
        )}
    </>
  );
}

export default CourseCard;
