import React from "react";
import "./index.css";
import ReviewList from "./review-list";
import ProfInfo from "./ProfInfo";

const DetailComponent = (info) => {
    return(
        <>
            <ProfInfo key={info._id} info={info}/>
            <ReviewList/>
        </>
    )
}
export default DetailComponent;