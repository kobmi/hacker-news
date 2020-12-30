import PropTypes from "prop-types";
import React from "react";

const Pagination = ({ page, nbPages, onClick }) => {
    return (
        <nav aria-label="...">
            <div className="mb-3">
                page: {page + 1}/{nbPages}
            </div>
            <ul className="pagination">
                <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        data-name="prev"
                        onClick={onClick}
                    >
                        Previous
                    </button>
                </li>
                <li
                    className={`page-item ${
                        page === nbPages - 1 ? "disabled" : ""
                    }`}
                >
                    <button
                        className="page-link"
                        data-name="next"
                        onClick={onClick}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    onClick: PropTypes.func,
    page: PropTypes.number,
    nbPages: PropTypes.number,
};

Pagination.defaultProps = {
    onClick: () => {},
    page: 0,
    nbPages: 0,
};

export default Pagination;
