import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => <h1 className="text-center">{title}</h1>;

Title.propTypes = {
    title: PropTypes.string,
};

Title.defaultProps = {
    title: "Default title",
};

export default Title;
