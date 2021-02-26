import React, { forwardRef } from "react";
import { CommonContainer, CommonImg } from "../styles/commonStyle";
import CurriculumImg from "../assets/CurriculumImg.png";

const CurriculumContainer = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <CommonContainer ref={ref} data-name="Curriculum">
            <CommonImg src={CurriculumImg}></CommonImg>
        </CommonContainer>
    );
});

export default CurriculumContainer;
