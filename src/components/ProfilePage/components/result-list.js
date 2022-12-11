import React, {useEffect, useState} from "react";
import ResultItem from "../../SearchPage/result-item";
import {useDispatch} from "react-redux";
import {findProfsSavedByUserThunk} from "../../../saves/saves-thunks";
import {findAllProfsThunk} from "../../temp-prof-for-detail/temp-profs-thunks";

const ResultList = () => {
    const [professors, setProfessors] = useState([])
    const username = window.location.hash.split("username=")[1]

    const dispatch = useDispatch();
    const findProfessors = async () => {
        let data = null;
        if (username) {
            data = await dispatch(findProfsSavedByUserThunk(username))
        } else {
            data = await dispatch(findProfsSavedByUserThunk(JSON.parse(window.localStorage.getItem("userinfo")).username))
        }
        const all = await dispatch(findAllProfsThunk())
        let arr = []
        data.payload.forEach(item => {
            all.payload.forEach(e => {
                if (item.prof === e.profID) {
                    arr.push(e)
                }
            })
        })
        setProfessors(arr)
    }
    useEffect(() => {
        findProfessors()
    })
    return (
        <ul className="list-group">
            {
                professors.map(info =>
                    <ResultItem
                        key={info._id} info={info}/>)
            }
        </ul>
    )
}
export default ResultList;
