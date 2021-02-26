import React, { forwardRef } from "react";
import styled from "styled-components";
import ReviewImg from "../assets/ReviewImg.png";

const Container = styled.div`
    border-bottom: 2px solid rgba(16, 22, 26, 0.15);
`;

const Img = styled.img`
    width: 100%;
`;

const Review = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Container ref={ref} data-name="Review">
            <Img src={ReviewImg}></Img>
        </Container>
    );
});

export default Review;
