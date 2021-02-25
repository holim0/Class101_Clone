import React, { forwardRef } from "react";
import styled from "styled-components";
import ReviewImg from "../assets/ReviewImg.png";

const Container = styled.div``;

const Img = styled.img`
    width: 100%;
`;

const Review = forwardRef((props, ref: any) => {
    return (
        <Container ref={ref} data-name="Review">
            <Img src={ReviewImg}></Img>
        </Container>
    );
});

export default Review;
