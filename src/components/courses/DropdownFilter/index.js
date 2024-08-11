import React, { useState } from "react";
function DropdownFilter({ selectedValue, handleChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggle} className="btn-primary dropdown-toggle">
        فیلتر
      </button>
      {isOpen && (
        <ul className="courses-list__filter2">
          <li className="courses-list__filter-item">
            <input
              name="filter"
              type="radio"
              value="all"
              id="all"
              checked={selectedValue === "all"}
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
              checked={selectedValue === "new"}
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
              checked={selectedValue === "expensives"}
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
              checked={selectedValue === "notComplete"}
              onChange={handleChange}
            />
            <label htmlFor="notComplete">تکمیل نشده ها</label>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownFilter;
