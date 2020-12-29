import React from "react";
import PropTypes from "prop-types";

const PagesSelect = ({ value, options, handleChange }) => (
    <div className="mb-3">
        <label htmlFor="select" className="form-label">
            News per page
        </label>
        <select
            className="form-control"
            id="select"
            value={value}
            onChange={handleChange}
        >
            {options.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    </div>
);

PagesSelect.propTypes = {
    value: PropTypes.number,
    options: PropTypes.array,
    handleChange: PropTypes.func,
};

PagesSelect.defaultProps = {
    value: 0,
    options: [],
    handleChange: () => {},
};

export default PagesSelect;
