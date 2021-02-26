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
} from "../styles/purchaseNavBarStyle";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import { RootState } from "../store";
import navBarLogoImg from "../assets/navBarLogoImg.png";

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
                    <div style={{ display: "flex" }}>
                        <div
                            style={{ color: "red", marginRight: "10px" }}
                        >{`${discountAmount}%`}</div>
                        <div>{`월 ${monthlyPayment.toLocaleString()}원`}</div>
                    </div>
                </PriceContainer>

                <VideoContainer>
                    <OndemandVideoIcon />
                    <div style={{ marginLeft: "10px" }}>콘텐츠 이용권</div>
                </VideoContainer>
                <ButtonContainer>
                    <button>
                        <span>❤️ {goodAmount}</span>
                    </button>
                    <button>
                        <div>
                            <ScreenShareIcon fontSize="small" />
                        </div>
                        <span>공유하기</span>
                    </button>
                    <button className="gift_btn">
                        <div>
                            <CardGiftcardIcon fontSize="small" />
                        </div>
                        <span>선물하기</span>
                    </button>
                </ButtonContainer>
                <div style={{ marginTop: "10px" }}>
                    <MoreOptionBtn>수강 옵션 구경하기</MoreOptionBtn>
                </div>
            </ControlContainer>
            <Banner>
                <div>
                    <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        준비물까지 챙겨주는 온라인 클래스
                    </div>
                    <div
                        style={{
                            fontSize: "11px",
                            color: "rgb(168, 174, 179)",
                        }}
                    >
                        클래스 101, 서비스 소개 보기
                    </div>
                </div>
                <img
                    src={navBarLogoImg}
                    alt="navBarLogoImg"
                    style={{ width: "36px" }}
                ></img>
            </Banner>
        </PurchaseContainer>
    );
};

export default PurchaseNavBar;
