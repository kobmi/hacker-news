import React from "react";

const App = () => {
    return (
        <div className="container">
            <div>
                <h1 className="text-center">Hacker News</h1>
            </div>
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
            <div className="mb-3">
                <label htmlFor="select" className="form-label">
                    News per page
                </label>
                <select className="form-control" id="select">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">Title</h6>
                        <small>12.12.2021</small>
                    </div>
                    <div className="mb-1">
                        <a className="text-muted" href="#" target="blank">
                            Donec id elit non mi porta gravida at eget metus.
                            Maecenas sed diam eget risus varius blandit.
                        </a>
                    </div>
                    <small>{`author | points | comments`}</small>
                </div>
            </div>
        </div>
    );
};

export default App;
