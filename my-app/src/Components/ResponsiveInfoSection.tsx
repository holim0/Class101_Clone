import React from "react";
import styled from "styled-components";

import PurchaseNavBar from "./PurchaseNavBar";

const Container = styled.div`
    display: none;
    width: 100%;
    @media only screen and (max-width: 1024px) {
        display: block;
    }
`;

const ResponsiveInfoSection = () => {
    return <Container>hi</Container>;
};

export default ResponsiveInfoSection;
