import React, { forwardRef } from "react";
import { CommonContainer, CommonImg } from "../styles/commonStyle";
import ReviewImg from "../assets/ReviewImg.png";

const Review = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <CommonContainer ref={ref} data-name="Review">
            <CommonImg src={ReviewImg}></CommonImg>
        </CommonContainer>
    );
});

export default Review;
