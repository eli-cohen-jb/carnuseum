import React, { Component } from "react";
import lodash from "lodash"
import PropTypes from 'prop-types'

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
//   console.log(pageCount)
  const pages = lodash.range(1, pageCount + 1)

  if(pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
              <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
    itemCount : PropTypes.number.isRequired,
    pageSize : PropTypes.number.isRequired,
    currentPage : PropTypes.number.isRequired,
    onPageChange :PropTypes.func.isRequired
}

export default Pagination;
