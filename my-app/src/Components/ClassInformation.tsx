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
    IntroduceTitle,
    CommonContainer,
    Text,
    TextTitle,
    MoreInfoButton,
} from "../styles/ClassInfoStyle";
import mainImg from "../assets/mainImg.png";
import infoImg from "../assets/infoImg.png";
import infoImg2 from "../assets/infoImg2.png";
import infoImg3 from "../assets/infoImg3.png";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const FirstClassMainSpace = () => {
    return (
        <ClassMainInfo>
            <IntroduceTitle>
                클래스를 <br></br>소개합니다.
            </IntroduceTitle>
            <CommonContainer>
                <CalendarTodayIcon />
                <div
                    style={{
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginTop: "15px",
                        marginBottom: "6px",
                    }}
                >
                    1년 수강 가능
                </div>
                <div>수강 기간 내 무제한 수강 가능합니다</div>
                <img
                    src={infoImg}
                    alt="infoImg"
                    style={{ marginTop: "50px" }}
                ></img>
                <Text>
                    <TextTitle>
                        스마트스토어를 활용한, 중국 구매 대행 효율 극대화 로드맵
                    </TextTitle>
                    <div style={{ fontSize: "16px", lineHeight: "24px" }}>
                        스마트스토어 시작의 바이블 ‘신사임당’ & 무자본, 무재고로
                        시작하는 중국 구매 대행 ‘온라인탑셀러’ 클래스 꿀조합!
                        <br></br>
                        스마트스토어 개설부터 운영까지의 실무를 익히고, 중국
                        구매 대행을 활용해 스마트스토어에 판매하는 방법까지.
                        <br></br>
                        스마트스토어의 기초와 구매대행 방법을 완전 정복하고,
                        글로벌셀러에 도전해보세요!
                    </div>
                </Text>
            </CommonContainer>
        </ClassMainInfo>
    );
};

const SecondClassMainSpace = () => {
    return (
        <CommonContainer>
            <TextTitle>
                📍 신사임당│스마트스토어로 월 100만원 만들기, 평범한 사람이 돈을
                만드는 비법
            </TextTitle>
            <img src={infoImg2} alt="infoImg2"></img>
            <ul style={{ fontSize: "16px", width: "100%" }}>
                <li>스마트스토어 개설 및 운영 방법</li>
                <li>카테고리 선정 및 상품 고르는 방법</li>
                <li>상세페이지 작성</li>
                <li>유입채널 확대</li>
            </ul>
            <div>
                스마트스토어 시작에 필요한 교과서. 시작에 필요한 모든 것을
                알려드립니다.
            </div>
            <MoreInfoButton>해당 클래스 자세히 보기</MoreInfoButton>
        </CommonContainer>
    );
};

const ThirdClassMainSpace = () => {
    return (
        <CommonContainer>
            <TextTitle>
                📍온라인탑셀러 │무자본, 무재고로 중국 구매 대행 사업/부업
                시작하기
            </TextTitle>
            <img src={infoImg3} alt="infoImg3"></img>
            <ul style={{ fontSize: "16px", width: "100%" }}>
                <li>중국 구매 대행 이해하기</li>
                <li>중국 구매 대행 실무 AtoZ</li>
                <li>1,000만원 절약하는 상품 등록 법</li>
                <li>한국, 중국 잘 팔리는 상품 가져오는 법</li>
            </ul>
            <div>
                제로베이스에서 1개월 만에 순이익 200만 원을 만들었던 방법 그대로
                알려드립니다.
            </div>
            <MoreInfoButton>해당 클래스 자세히 보기</MoreInfoButton>
        </CommonContainer>
    );
};

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
                <FirstClassMainSpace />
                <SecondClassMainSpace />
                <ThirdClassMainSpace />
            </ClassInfoContainer>
            <PurchaseContainer>구매 항목</PurchaseContainer>
        </Container>
    );
};

export default ClassInformation;
