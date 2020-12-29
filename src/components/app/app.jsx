import React, { useEffect, useState } from "react";

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

const App = () => {
    const [hits, setHits] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        console.log("getData");
        fetch("http://hn.algolia.com/api/v1/search?query=")
            .then((response) => response.json())
            .then(({ hits }) => setHits(hits))
            .catch((error) => error);
    };
    console.log(hits);
    return (
        <div className="container">
            <Title />
            <SearchInput />
            <PagesSelect options={SELECT_OPTIONS} />
            <div className="list-group list-group-flush">
                {hits.map(({ objectID, ...props }) => (
                    <NewsPost key={objectID} {...props} />
                ))}
            </div>
        </div>
    );
};

export default App;
