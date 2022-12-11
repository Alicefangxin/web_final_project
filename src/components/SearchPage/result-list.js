import React from "react";
import ResultItem from "./result-item.js";
import {useSelector} from "react-redux";

const ResultList = () => {
    const {searched, loading} = useSelector((state) => state.searched);

    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                searched.map(info =>
                    <ResultItem
                        key={info._id} info={info}/>)
            }
        </ul>
    )
}
export default ResultList;