import React from "react";
import student from "../../../assets/images/student.svg";
import teacher from "../../../assets/images/teacher.svg";
import course from "../../../assets/images/course.svg";
const Information = () => {
  return (
    <section className="information">
      <div className="information__box">
        <img className="information__box__icon" alt="student" src={student} />
        <h2 className="information__box__title">576 دانشجو</h2>
        <p className="information__box__des">
          تا کنون بیش از 500 نفر از آموزش های بامبو استفاده کرده اند .و نظرات
          خودشونو ثبت کرده اند
        </p>
      </div>
      <div className="information__box">
        <img className="information__box__icon" alt="student" src={teacher} />
        <h2 className="information__box__title">34 استاد</h2>
        <p className="information__box__des">
          بیش از 30 استاد ، از برترین اساتید ایران همراه ما هستند .و دوره های
          خودشونو ثبت کرده اند
        </p>
      </div>
      <div className="information__box">
        <img className="information__box__icon" alt="student" src={course} />
        <h2 className="information__box__title">219 دوره</h2>
        <p className="information__box__des">
          تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت .در سایت ثبت شده و
          قابل دسترسی است
        </p>
      </div>
    </section>
  );
};

export default Information;
