/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import {useSelector} from "react-redux";
import "./home.css";
import ProfList from "../../professors";
import Footer from "../footer/Footer";

const UnloggedHome = () => {
    // const {currentUser} = useSelector((state) => state.users);
    return (
        <>
            <div className="mt-6 p-3 bg-white bg-opacity-10 border border-dark border-bottom-0 border-end-0 border-start-0">
                <div className="pt-2">
                    <h2>Welcome to R8MyProfessor, Huskies!</h2>
                </div>
                <div className="mt-1">
                    <img
                        className="rounded-5 ms-2 me-2"
                        src="https://pbs.twimg.com/media/ExQ97nJXMAM2AJH?format=jpg&name=medium"
                        width="350"
                     alt="none"/>
                    <img
                        className="rounded-5 ms-2"
                        src="https://i0.wp.com/news.northeastern.edu/wp-content/uploads/2021/10/husky-puppies-scaled.jpg?fit=2560%2C1704&ssl=1"
                        width="350"
                        alt="none"/>
                    <img
                        className="rounded-5 ms-3"
                        src="https://pbs.twimg.com/media/ExQ97a9WUAQNm3_?format=jpg&name=medium"
                        width="350"
                        alt="none"/>
                </div>
            </div>
            <div className="pt-2 mt-3">
                <h2>Professors in Trends</h2>
            </div>
            <div className="p-3 mb-5 bg-info bg-opacity-10 border border-success border-start-0 border-end-0 rounded-end">
                <div className="tab-pane fade show active" id="professors" role="tabpanel" aria-labelledby="professors-tab">
                    <ProfList/></div>
            </div>
            <Footer/>
        </>
    );
};

export default UnloggedHome;
