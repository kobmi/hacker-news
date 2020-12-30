import React, { useEffect, useState } from "react";

import NewsPost from "../../components/news-post/news-post";
import SearchInput from "../../components/search-input/search-input";
import Title from "../../components/title/title";
import PagesSelect from "../../components/pages-select/pages-select";
import Pagination from "../../components/pagination/pagination";

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
const PAGE_PARAM = "page=";

const News = () => {
    const [result, setResult] = useState({ hits: [] });
    const [searchQuery, setSearchQuery] = useState("");
    const [hitsPerPage, setHitsPerPage] = useState(50);
    const [page, setPage] = useState(0);

    useEffect(() => {
        getData(searchQuery, hitsPerPage, page);
        // eslint-disable-next-line
    }, [hitsPerPage, page]);

    const getData = (searchQuery, hitsPerPage, page) => {
        fetch(
            `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${HITS_PER_PAGE_PARAM}${hitsPerPage}&${PAGE_PARAM}${page}`
        )
            .then((response) => response.json())
            .then((result) => setResult(result))
            .catch((error) => error);
    };

    const getSearchData = ({ key }) => {
        if (key === "Enter") {
            getData(searchQuery, hitsPerPage, 0);
            setPage(0);
        }
    };

    const searchInputChange = ({ target: { value } }) => {
        setSearchQuery(value);
    };

    const hitsPerPageChange = ({ target: { value } }) => {
        setHitsPerPage(+value);
        setPage(0);
    };

    const changePage = ({ target }) => {
        const btnType = target.getAttribute("data-name");

        switch (btnType) {
            case "prev":
                setPage((prev) => prev - 1);
                break;
            case "next":
                setPage((prev) => prev + 1);
                break;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <Title title="Hacker News" />
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
            <Pagination
                page={page}
                nbPages={result.nbPages}
                onClick={changePage}
            />
            <div className="list-group list-group-flush">
                {result.hits.map(({ objectID, ...props }) => (
                    <NewsPost key={objectID} {...props} />
                ))}
            </div>
        </div>
    );
};

export default News;
