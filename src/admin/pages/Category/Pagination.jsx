// Pagination.jsx

import React from "react";

const Pagination = ({ pagination, handlePageChange }) => {
  const pages = [];
  const maxVisible = 5;

  let start = Math.max(1, pagination.current_page - Math.floor(maxVisible / 2));
  let end = Math.min(pagination.last_page, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1);

  return (
    <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
      <div className="text-muted mb-2">
        نمایش {(pagination.current_page - 1) * pagination.per_page + 1} تا{" "}
        {Math.min(pagination.current_page * pagination.per_page, pagination.total)} از{" "}
        {pagination.total} مورد
      </div>

      <nav>
        <ul className="pagination mb-0">

          <li className={`page-item ${pagination.current_page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(pagination.current_page - 1)}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </li>

          {[...Array(end - start + 1)].map((_, i) => {
            const page = start + i;
            return (
              <li key={page} className={`page-item ${pagination.current_page === page ? "active" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(page)}>
                  {page}
                </button>
              </li>
            );
          })}

          <li className={`page-item ${pagination.current_page === pagination.last_page ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(pagination.current_page + 1)}>
              <i className="fas fa-chevron-left"></i>
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
