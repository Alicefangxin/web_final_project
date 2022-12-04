import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResultItem from "../SearchPage/result-item";
import { findAllProfsThunk } from "../temp-prof-for-detail/temp-profs-thunks";

const TempProfList = () => {
  const { profs, loading } = useSelector((state) => state.temp);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllProfsThunk());
  }, [dispatch]);
  return (
    <>
      <div className="container mt-5">
        <ul className="list-group">
          {loading ? (
            <li className="list-group-item">Loading...</li>
          ) : (
            profs.map((prof) => <ResultItem key={prof._id} info={prof} />)
          )}
        </ul>
      </div>
    </>
  );
};

export default TempProfList;
