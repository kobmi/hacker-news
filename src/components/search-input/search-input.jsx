import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ value, onPressKey, onChange }) => (
    <div className="mb-3">
        <label className="form-label" htmlFor="search">
            Search News
        </label>
        <input
            className="form-control"
            type="search"
            placeholder="Click to search"
            id="search"
            autoComplete="off"
        />
    </div>
);

SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onPressKey: PropTypes.func,
};

SearchInput.defaultProps = {
    value: "",
    onChange: () => {},
    onPressKey: () => {},
};

export default SearchInput;
