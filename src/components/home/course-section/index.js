import React from "react";
import Detail from "../../UI/Detail";
import Courses from "./Courses";
const Course = () => {
  return (
    <section className="courses">
      <Detail
        title="دوره های آموزشی"
        text="دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین اساتید ایران در دسته بندی های گوناگونی همچون طراحی، برنامه نویسی، اقتصاد، فلسفه، فیزیک، شیمی، ریاضی، هنر و..."
        buttonText="مشاهده دوره ها"
      />
      <Courses />
    </section>
  );
};

export default Course;
