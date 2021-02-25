import React from "react";
import styled from "styled-components";

import {
    CategoryTitle,
    Title,
    OptionContainer,
    PriceContainer,
    VideoContainer,
    ButtonContainer,
    Option,
    Banner,
} from "../styles/PurchaseNavBarStyle";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

const Container = styled.div`
    display: none;
    width: 100%;
    @media only screen and (max-width: 1024px) {
        display: block;
    }
`;

const ResponsiveInfoSection = () => {
    return (
        <Container>
            <CategoryTitle>온라인쇼핑몰 · 클래스101</CategoryTitle>
            <Title>
                [1+1클래스] 스마트스토어를 활용한 중국 구매 대행 완벽 가이드!
            </Title>
            <OptionContainer>
                <Option>선물하기</Option>
                <Option>바로 수강 가능</Option>
            </OptionContainer>
            <PriceContainer>
                <div>12개월 할부</div>
                <div>32% 월 22,283원</div>
            </PriceContainer>

            <VideoContainer>
                <OndemandVideoIcon />
                <div style={{ marginLeft: "10px" }}>콘텐츠 이용권</div>
            </VideoContainer>

            <ButtonContainer>
                <button>❤️ 665</button>
                <button style={{ marginRight: "0" }}>공유하기</button>
            </ButtonContainer>
            <Banner>
                <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    준비물까지 챙겨주는 온라인 클래스
                </div>
                <div style={{ fontSize: "11px", color: "rgb(168, 174, 179)" }}>
                    클래스 101, 서비스 소개 보기
                </div>
            </Banner>
        </Container>
    );
};

export default ResponsiveInfoSection;
