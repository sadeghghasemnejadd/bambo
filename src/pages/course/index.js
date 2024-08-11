import React, { useEffect } from "react";
import CourseHeader from "../../components/course/header-section";
import Advantage from "../../components/course/advantage-section";
import Detail from "../../components/course/detail-section";
import { useParams } from "react-router-dom";
import { course_data } from "../../data/course-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../store/course";
import CommentSection from "../../components/commentSection";
const Course = () => {
  // const data = location.state.data;
  const dispatch = useDispatch();
  const { courses, loading } = useSelector((store) => store.course);
  const { id } = useParams();
  let data = courses.find((c) => c._id === id);

  return (
    <main>
      <CourseHeader data={data} />
      <Detail data={data} />
      <Advantage data={data} />
      <CommentSection/>
    </main>
  );
};

export default Course;
