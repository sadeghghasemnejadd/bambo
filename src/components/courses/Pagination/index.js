import React, { useState } from "react";
function Pagination({ itemsPerPage = 8, totalItems = 32 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const nextHandler = () => {
    if (currentPage <= pageNumbers.length - 1 ) {
      setCurrentPage(currentPage + 1);
    }
  }
  const prevHandler = () => {
    if (currentPage >= 2 ) {
      setCurrentPage(currentPage - 1);
    }
  }
  return (
    <div className="pagination">
      <div className="pagination__prev" onClick={prevHandler}>&lt;</div>
      <ul className="pagination__pages">
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className="pagination__page"
              onChange={() => paginate(number)}
            >
              <input
                name="paginate"
                type="radio"
                value={number}
                id={number}
                checked={currentPage === number}
                onChange={() => paginate(number)}
              />
              <label htmlFor={number}>{number}</label>
            </li>
          );
        })}
      </ul>
      <div className="pagination__next" onClick={nextHandler}>&gt;</div>
    </div>
  );
}

export default Pagination;
