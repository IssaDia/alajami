import React from "react"

const Pagination = ({
  itemsPerPage,
  length,
  handlePageChange,
  currentPage
}) => {

  const pagesCount = Math.ceil(length / itemsPerPage);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <>
  <div className='row'>
      <div className='col-md-12'>
        <ul className="pagination">
          <li className={"page-item " + (currentPage === 1 && "disabled")}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</button>
          </li>
          {pages.map(page => {
            return (
              <li key={page} className={"page-item " + (currentPage === page && "active")}>
                <button className="page-link" onClick={() => handlePageChange(page)}>
                  {page}
                </button>
              </li>
            );
          })}
          <li className={"page-item " + (currentPage === pages.length && "disabled")}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
          </li>
        </ul>
      </div>
    
  </div>
  </>;
};

export default Pagination;
