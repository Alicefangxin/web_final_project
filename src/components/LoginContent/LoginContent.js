import React from "react";

const LoginContent = () => {
    return (
        <>
            <div className="pt-2">
                <h1>Northeastern University - rate my professor</h1>
            </div>
            <div className="d-flex flex-row-reverse pt-1">
                <div className="mb-2">
                    <h4>
                        <button className="rounded-pill fs-6 fw-bold p-2 border-0 me-2" style={{ color: "white", backgroundColor: "lightslategray" }}>Hey User!</button>
                    </h4>
                </div>
            </div>

            <div className="mt-5 p-5">
                <i className="fas fa-search fa-2x" style={{ color: "lightslategray" }}></i>
                <input
                    className="wd-H-searchBar d-flex justify-content-center rounded-pill border border-5 border-secondary border-opacity-25 "
                    placeholder="Search for Your Professor........"
                />
                <a className="ms-2 fs-6" style={{ color: "lightslategray" }} href="#">
                    {" "}
                    I want to find a professor by major{" "}
                </a>
            </div>



        </>
    );
};

export default LoginContent;
