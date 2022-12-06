import React from "react";
import {Link} from "react-router-dom";

const SubmittedComponent = () => {
    return(
        <>
            <div className="container mt-5">
                <h4>Submission Completed! We are reviewing your rating request...</h4>
                <Link to="/details">
                    <button className="btn btn-primary mt-3">
                        Back to Professor Rating
                    </button>
                </Link>
            </div>
        </>
    )
}
export default SubmittedComponent;