import React from "react";
import "./index.css";
import ReviewList from "./review-list";
import ProfInfo from "./ProfInfo";
import {useLocation} from "react-router";

const DetailComponent = () => {
    const location = useLocation();
    const info = location.state.info;
    return(
        <>
            <ProfInfo key={info._id} info={info}/>
            <ReviewList/>
        </>
    )
}
export default DetailComponent;