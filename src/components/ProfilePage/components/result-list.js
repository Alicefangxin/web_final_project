import React, {useEffect} from "react";
import ResultItem from "../../SearchPage/result-item";
import {useDispatch, useSelector} from "react-redux";
import {findProfsSavedByUserThunk} from "../../../saves/saves-thunks";

const ResultList = () => {
    const {saved_profs} = useSelector((state) => state.saved_profs);
    const username = window.location.hash.split("username=")[1]
    console.log('username:', username);

    const dispatch = useDispatch();

    useEffect(() => {
        if (username) {
            dispatch(findProfsSavedByUserThunk(username))
        } else {
            dispatch(findProfsSavedByUserThunk(JSON.parse(window.localStorage.getItem("userinfo")).username))
        }
    }, [dispatch, username])
    return (
        <ul className="list-group">
            {
                saved_profs.map(info =>
                    <ResultItem
                        key={info._id} info={info}/>)
            }
        </ul>
    )
}
export default ResultList;
