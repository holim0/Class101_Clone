import React from "react";
import styled from "styled-components";
import CommunityImg from "../assets/CommunityImg.png";

const Container = styled.div`
    border-bottom: 2px solid rgba(16, 22, 26, 0.15);
`;

const Img = styled.img`
    width: 100%;
`;

const CommunityContainer = () => {
    return (
        <Container>
            <Img src={CommunityImg}></Img>
        </Container>
    );
};

export default CommunityContainer;
