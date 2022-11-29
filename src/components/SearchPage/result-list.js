import React from "react";
import ResultItem from "./result-item.js";
import infoArray from "./profInfos.json";

const ResultList = () =>{
    return(
        <ul className="list-group">
            {
                infoArray.map(info =>
                    <ResultItem
                        key={info._id} info={info}/>)
            }
        </ul>
    )
}
export default ResultList;