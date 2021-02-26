import React, { forwardRef } from "react";
import { CommonContainer, CommonImg } from "../styles/commonStyle";
import CommunityImg from "../assets/CommunityImg.png";

const CommunityContainer = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <CommonContainer ref={ref} data-name="Community">
            <CommonImg src={CommunityImg}></CommonImg>
        </CommonContainer>
    );
});

export default CommunityContainer;
