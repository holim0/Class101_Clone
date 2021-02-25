import React from "react";
import { useSelector } from "react-redux";
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
    Banner,
} from "../styles/PurchaseNavBarStyle";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import { RootState } from "../store";

interface Props {
    flag: boolean;
}

const PurchaseNavBar = ({ flag }: Props) => {
    const {
        Category,
        title,
        monthlyInstallments,
        monthlyPayment,
        discountAmount,
        goodAmount,
    } = useSelector((state: RootState) => state.ClassInfoStore);

    return (
        <PurchaseContainer flag={flag}>
            <ControlContainer>
                <CategoryTitle>{`${Category[0]} • ${Category[1]}`}</CategoryTitle>
                <Title>{title}</Title>
                <OptionContainer>
                    <Option>선물하기</Option>
                    <Option>바로 수강 가능</Option>
                </OptionContainer>
                <PriceContainer>
                    <div>{`${monthlyInstallments}개월 할부`}</div>
                    <div>{`${discountAmount}% 월 ${monthlyPayment.toLocaleString()}원`}</div>
                </PriceContainer>

                <VideoContainer>
                    <OndemandVideoIcon />
                    <div style={{ marginLeft: "10px" }}>콘텐츠 이용권</div>
                </VideoContainer>

                <ButtonContainer>
                    <button>{goodAmount}</button>
                    <button>공유하기</button>
                    <button style={{ marginRight: "0" }}>선물하기</button>
                </ButtonContainer>
                <div style={{ marginTop: "10px" }}>
                    <MoreOptionBtn>수강 옵션 구경하기</MoreOptionBtn>
                </div>
            </ControlContainer>
            <Banner>
                <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    준비물까지 챙겨주는 온라인 클래스
                </div>
                <div style={{ fontSize: "11px", color: "rgb(168, 174, 179)" }}>
                    클래스 101, 서비스 소개 보기
                </div>
            </Banner>
        </PurchaseContainer>
    );
};

export default PurchaseNavBar;

// https://class101.net/login?redirect=%2Fproducts%2FZxkcTVAjAy7u9DIerc7g&message=%EC%B0%9C%ED%95%98%EA%B8%B0%EB%A5%BC+%EC%9C%84%ED%95%B4+%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94.
