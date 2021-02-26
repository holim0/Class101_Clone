import React from "react";
import { CommonContainer, CommonImg } from "../styles/commonStyle";
import CommunityImg from "../assets/CommunityImg.png";

const CommunityContainer = () => {
    return (
        <CommonContainer>
            <CommonImg src={CommunityImg}></CommonImg>
        </CommonContainer>
    );
};

export default CommunityContainer;
