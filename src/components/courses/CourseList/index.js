import React, { useState, useEffect } from 'react';
import CourseCard from '../CourseCard';
import { course_data } from '../../../data/course-data';
import Pagination from '../Pagination';
import DropdownFilter from '../DropdownFilter';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourses } from '../../../store/course';
function CourseList() {
  const dispatch = useDispatch();
  const { loading, courses } = useSelector((store) => store.course);
  const [selectedValue, setSelectedValue] = useState('all');
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = dispatch(getAllCourses());
    } catch (err) {
      throw err;
    }
  };
  return (
    <section className="courses-list">
      <header className="courses-list__header">
        <div className="courses-list__filters">
          <ul className="courses-list__filter">
            <li className="courses-list__filter-item">
              <input
                name="filter"
                type="radio"
                value="all"
                id="all"
                checked={selectedValue === 'all'}
                onChange={handleChange}
              />
              <label htmlFor="all">همه دوره ها</label>
            </li>
            <li className="courses-list__filter-item">
              <input
                name="filter"
                type="radio"
                value="new"
                id="new"
                checked={selectedValue === 'new'}
                onChange={handleChange}
              />
              <label htmlFor="new">جدید ترین ها</label>
            </li>
            <li className="courses-list__filter-item">
              <input
                name="filter"
                type="radio"
                value="expensives"
                id="expensives"
                checked={selectedValue === 'expensives'}
                onChange={handleChange}
              />
              <label htmlFor="expensives">گران ترین ها</label>
            </li>
            <li className="courses-list__filter-item">
              <input
                name="filter"
                type="radio"
                value="notComplete"
                id="notComplete"
                checked={selectedValue === 'notComplete'}
                onChange={handleChange}
              />
              <label htmlFor="notComplete">تکمیل نشده ها</label>
            </li>
          </ul>
          <DropdownFilter
            selectedValue={selectedValue}
            handleChange={handleChange}
          />
        </div>
        <div className="courses-list__topic">
          <h2>دوره های آموزشی</h2>
        </div>
      </header>
      <main className="courses-list__main">
        <div className="courses-list__cards">
          {course_data.map((item) => {
            return (
              <CourseCard
                allData={item}
                key={item.id}
                img={item.banner}
                alt={item.pName}
                topic={`دوره ${item.pName}`}
                teacher={item.teacher}
                capacity={item.capacity}
                cost={item.cost}
              />
            );
          })}
        </div>
      </main>
      <footer className="courses-list__footer">
        <Pagination />
      </footer>
    </section>
  );
}

export default CourseList;
