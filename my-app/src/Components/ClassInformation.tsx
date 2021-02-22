import React from "react";
import {
    ClassInfoContainer,
    PurchaseContainer,
    Container,
    ImageContainer,
} from "../styles/ClassInfoStyle";
import mainImg from "../assets/mainImg.png";

const ClassInformation = () => {
    return (
        <Container>
            <ClassInfoContainer>
                <ImageContainer src={mainImg} alt="main"></ImageContainer>
            </ClassInfoContainer>
            <PurchaseContainer>구매 항목</PurchaseContainer>
        </Container>
    );
};

export default ClassInformation;
