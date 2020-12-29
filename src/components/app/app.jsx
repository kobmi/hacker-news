import React, { useEffect, useState, useMemo, useCallback } from "react";

import NewsPost from "../news-post/news-post";
import SearchInput from "../search-input/search-input";
import Title from "../title/title";
import PagesSelect from "../pages-select/pages-select";

const SELECT_OPTIONS = [
    {
        value: 10,
        label: 10,
    },
    {
        value: 20,
        label: 20,
    },
    {
        value: 50,
        label: 50,
    },
];

const BASE_PATH = "http://hn.algolia.com/api/v1";
const SEARCH_PATH = "/search";
const SEARCH_PARAM = "query=";
const HITS_PER_PAGE_PARAM = "hitsPerPage=";

const App = () => {
    const [hits, setHits] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [hitsPerPage, setHitsPerPage] = useState(50);

    useEffect(() => {
        getData(searchQuery, hitsPerPage);
    }, [hitsPerPage]);

    const getData = (searchQuery, hitsPerPage) => {
        console.log("getData");
        fetch(
            `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${HITS_PER_PAGE_PARAM}${hitsPerPage}`
        )
            .then((response) => response.json())
            .then(({ hits }) => setHits(hits))
            .catch((error) => error);
    };

    const getSearchData = ({ key }) => {
        if (key === "Enter") {
            getData(searchQuery, hitsPerPage);
        }
    };

    const searchInputChange = ({ target: { value } }) => {
        setSearchQuery(value);
    };

    const hitsPerPageChange = ({ target: { value } }) => {
        setHitsPerPage(+value);
    };

    console.log(hits, "render");
    return (
        <div className="container">
            <Title />
            <SearchInput
                onChange={searchInputChange}
                value={searchQuery}
                onKeyPress={getSearchData}
            />
            <PagesSelect
                options={SELECT_OPTIONS}
                value={hitsPerPage}
                handleChange={hitsPerPageChange}
            />
            <div className="list-group list-group-flush">
                {hits.map(({ objectID, ...props }) => (
                    <NewsPost key={objectID} {...props} />
                ))}
            </div>
        </div>
    );
};

export default App;
