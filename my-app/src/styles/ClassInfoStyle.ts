import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 32px;
`;

const ClassInfoContainer = styled.div`
    width: 100%;
    @media only screen and (min-width: 1024px) {
        width: 67%;
        height: auto;
    }
`;

const PurchaseContainer = styled.div``;

const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
`;

export { ClassInfoContainer, PurchaseContainer, Container, ImageContainer };
