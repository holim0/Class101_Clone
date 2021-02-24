import React from "react";
import {
    PurchaseContainer,
    ControlContainer,
    Title,
    CategoryTitle,
    PriceContainer,
    VideoContainer,
    ButtonContainer,
    OptionContainer,
    Option,
    MoreOptionBtn,
} from "../styles/PurchaseNavBarStyle";

import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

interface Props {
    flag: boolean;
}

const PurchaseNavBar = ({ flag }: Props) => {
    return (
        <PurchaseContainer flag={flag}>
            <ControlContainer>
                <CategoryTitle>온라인쇼핑몰 · 클래스101</CategoryTitle>
                <Title>
                    [1+1클래스] 스마트스토어를 활용한 중국 구매 대행 완벽
                    가이드!
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
                    <button>665</button>
                    <button>공유하기</button>
                    <button>선물하기</button>
                </ButtonContainer>
                <div style={{ padding: "0 20px", marginTop: "10px" }}>
                    <MoreOptionBtn>수강 옵션 구경하기</MoreOptionBtn>
                </div>
            </ControlContainer>
            <div>
                <div>준비물까지 챙겨주는 온라인 클래스</div>
                <div>클래스 101, 서비스 소개 보기</div>
            </div>
        </PurchaseContainer>
    );
};

export default PurchaseNavBar;

// https://class101.net/login?redirect=%2Fproducts%2FZxkcTVAjAy7u9DIerc7g&message=%EC%B0%9C%ED%95%98%EA%B8%B0%EB%A5%BC+%EC%9C%84%ED%95%B4+%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94.
