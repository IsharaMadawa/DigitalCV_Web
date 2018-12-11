/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash";
import Proptype from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const PageCount = Math.ceil(itemsCount / pageSize);
  if (PageCount === 1) return null;
  const pages = _.range(1, PageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.prototype = {
  itemsCount: Proptype.number.isRequired,
  pageSize: Proptype.number.isRequired,
  currentPage: Proptype.number.isRequired,
  onPageChange: Proptype.func.isRequired
};

export default Pagination;
