import React, {useEffect, useState} from "react";
import "../../profilePage.css";
import DetailComponent from "../../../DetailPage/review-list";

const ProfileRatingsComponent = () => {
 return(
   <>
        <div
            className="tab-pane fade show active"
            id="ratings"
            role="tabpanel"
            aria-labelledby="ratings-tab"
        >
            <DetailComponent />
        </div>
   </>
 );
};
export default ProfileRatingsComponent;
