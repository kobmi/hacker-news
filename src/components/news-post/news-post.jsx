import React from "react";
import PropTypes from "prop-types";

const NewsPost = ({ title, author, created_at, url, points, num_comments }) => (
    <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">{title}</h6>
            <small>{new Date(created_at).toLocaleDateString()}</small>
        </div>
        <div className="mb-1">
            <a className="text-muted" href={url} target="blank">
                {url}
            </a>
        </div>
        <small>{`author: ${author} | ${points} points | ${num_comments} comments`}</small>
    </div>
);

NewsPost.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    num_comments: PropTypes.number,
    url: PropTypes.string,
    points: PropTypes.number,
};

NewsPost.defaultProps = {
    title: "",
    author: "",
    num_comments: 0,
    url: "",
    points: 0,
};

export default NewsPost;
