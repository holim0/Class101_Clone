import React from "react";
import {
    ClassInfoContainer,
    PurchaseContainer,
    Container,
    ImageContainer,
    ButtonContainer,
    Btn,
    ButtonInside,
    ClassSimpleInfoContainer,
    ClassSimpleInfo,
    Info,
    ClassMainInfo,
    ClassSimpleInfoTitle,
} from "../styles/ClassInfoStyle";
import mainImg from "../assets/mainImg.png";

const ClassInformation = () => {
    return (
        <Container>
            <ClassInfoContainer>
                <ImageContainer src={mainImg} alt="main"></ImageContainer>
                <ButtonContainer>
                    <ButtonInside>
                        <Btn>후기</Btn>
                        <Btn>클래스 소개</Btn>
                        <Btn>커리큘럼</Btn>
                        <Btn>크리에이터</Btn>
                        <Btn>커뮤니티</Btn>
                        <Btn>환불 정책</Btn>
                        <Btn>추천</Btn>
                    </ButtonInside>
                </ButtonContainer>
                <ClassSimpleInfoContainer>
                    <ClassSimpleInfoTitle>클래스 정보</ClassSimpleInfoTitle>
                    <ClassSimpleInfo>
                        <Info>
                            클래스 분량 <div>0개 챕터, 0개 세부강의</div>
                        </Info>
                        <Info>
                            수강 가능일 <div>바로 수강 가능</div>
                        </Info>
                        <Info>
                            자막 포함 여부 <div>포함</div>
                        </Info>
                    </ClassSimpleInfo>
                </ClassSimpleInfoContainer>
            </ClassInfoContainer>
            <PurchaseContainer>구매 항목</PurchaseContainer>
        </Container>
    );
};

export default ClassInformation;
