import React, { forwardRef } from "react";
import styeld from "styled-components";
import CurriculumImg from "../assets/CurriculumImg.png";

const Container = styeld.div``;

const Img = styeld.img`
    width: 100%;
`;

const Curriculum = forwardRef((props, ref: any) => {
    return (
        <Container ref={ref}>
            <Img src={CurriculumImg}></Img>
        </Container>
    );
});

export default Curriculum;
