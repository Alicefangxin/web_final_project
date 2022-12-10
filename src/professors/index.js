import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ResultItem from "../components/SearchPage/result-item";
import {getProfessorsThunk} from "./prof-thunks";

const ProfList = () => {
    const {professors, loading} = useSelector((state) => state.professors);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfessorsThunk())
    }, [dispatch])

    return (
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                professors.map(prof => {
                    return (<ResultItem key={prof._id} info={prof}/>)
                })
            }
        </div>
    )
}

export default ProfList;