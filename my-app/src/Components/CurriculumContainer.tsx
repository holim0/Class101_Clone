import React, { forwardRef } from "react";
import styeld from "styled-components";
import CurriculumImg from "../assets/CurriculumImg.png";

const Container = styeld.div`
    border-bottom: 2px solid rgba(16, 22, 26, 0.15);
`;

const Img = styeld.img`
    width: 100%;
`;

const CurriculumContainer = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Container ref={ref} data-name="Curriculum">
            <Img src={CurriculumImg}></Img>
        </Container>
    );
});

export default CurriculumContainer;
