import React, { useEffect, useState, useRef, forwardRef } from "react";
import {
    ClassInfoContainer,
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
    List,
    TextTitle,
    MoreInfoButton,
    CircleImg,
    RefundNotice,
    DetailRefundInfo,
    RecommendContainer,
} from "../styles/classInfoStyle";
import mainImg from "../assets/mainImg.png";
import infoImg from "../assets/infoImg.png";
import infoImg2 from "../assets/infoImg2.png";
import infoImg3 from "../assets/infoImg3.png";
import catImg from "../assets/cat.png";
import RecommendImg from "../assets/RecommendImg.png";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { scrollType } from "../types";
import PurchaseNavBar from "./PurchaseNavBar";
import ResponsiveInfoSection from "./ResponsiveInfoSection";
import ReviewContainer from "./ReviewContainer";
import CurriculumContainer from "./CurriculumContainer";
import { useDispatch, useSelector } from "react-redux";
import { RequestClassInfoData } from "../store/ClassInfoStore";
import { RootState } from "../store";
import { ButtonPropsType } from "../types";
import CommunityContainer from "./CommunityContainer";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const ClassIntroduceContainer = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <ClassMainInfo>
            <IntroduceTitle ref={ref} data-name="Introduce">
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
                    <TextTitle shape="">
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
});

const ButtonSpace = forwardRef(
    ({ flag, curSectionName, scrollToRef }: ButtonPropsType, ref: any) => {
        return (
            <ButtonContainer flag={flag} ref={ref}>
                <ButtonInside>
                    <Btn
                        value="Review"
                        flag={curSectionName === "Review"}
                        onClick={scrollToRef}
                    >
                        후기
                    </Btn>
                    <Btn
                        value="Introduce"
                        flag={curSectionName === "Introduce"}
                        onClick={scrollToRef}
                    >
                        클래스 소개
                    </Btn>
                    <Btn
                        value="Curriculum"
                        flag={curSectionName === "Curriculum"}
                        onClick={scrollToRef}
                    >
                        커리큘럼
                    </Btn>
                    <Btn
                        value="Creator"
                        flag={curSectionName === "Creator"}
                        onClick={scrollToRef}
                    >
                        크리에이터
                    </Btn>
                    <Btn
                        value="Community"
                        flag={curSectionName === "Community"}
                        onClick={scrollToRef}
                    >
                        커뮤니티
                    </Btn>
                    <Btn
                        value="Refund"
                        flag={curSectionName === "Refund"}
                        onClick={scrollToRef}
                    >
                        환불 정책
                    </Btn>
                    <Btn
                        value="Recommend"
                        flag={curSectionName === "Recommend"}
                        onClick={scrollToRef}
                    >
                        추천
                    </Btn>
                </ButtonInside>
            </ButtonContainer>
        );
    }
);

const FirstClassExplanation = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <CommonContainer ref={ref}>
            <TextTitle shape="">
                📍 신사임당│스마트스토어로 월 100만원 만들기, 평범한 사람이 돈을
                만드는 비법
            </TextTitle>
            <img src={infoImg2} alt="infoImg2"></img>
            <List>
                <li>스마트스토어 개설 및 운영 방법</li>
                <li>카테고리 선정 및 상품 고르는 방법</li>
                <li>상세페이지 작성</li>
                <li>유입채널 확대</li>
            </List>
            <div>
                스마트스토어 시작에 필요한 교과서. 시작에 필요한 모든 것을
                알려드립니다.
            </div>
            <MoreInfoButton>
                해당 클래스 자세히 보기 <ArrowRightAltIcon fontSize="large" />
            </MoreInfoButton>
        </CommonContainer>
    );
});

const SecondClassExplanation = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <CommonContainer ref={ref}>
            <TextTitle shape="">
                📍온라인탑셀러 │무자본, 무재고로 중국 구매 대행 사업/부업
                시작하기
            </TextTitle>
            <img src={infoImg3} alt="infoImg3"></img>
            <List>
                <li>중국 구매 대행 이해하기</li>
                <li>중국 구매 대행 실무 AtoZ</li>
                <li>1,000만원 절약하는 상품 등록 법</li>
                <li>한국, 중국 잘 팔리는 상품 가져오는 법</li>
            </List>
            <div>
                제로베이스에서 1개월 만에 순이익 200만 원을 만들었던 방법 그대로
                알려드립니다.
            </div>
            <MoreInfoButton>
                해당 클래스 자세히 보기 <ArrowRightAltIcon fontSize="large" />
            </MoreInfoButton>
        </CommonContainer>
    );
});

const CreatorInfoContainer = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <CommonContainer ref={ref} data-name="Creator">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <TextTitle shape="normal">
                    크리에이터 <br></br> <strong>클래스101</strong>입니다.
                </TextTitle>
                <CircleImg src={catImg} alt="cat"></CircleImg>
            </div>
        </CommonContainer>
    );
});

const RefundInfoContainer = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <CommonContainer ref={ref} data-name="Refund">
            <TextTitle shape="">환불정책</TextTitle>
            <RefundNotice>
                <div style={{ marginBottom: "10px" }}>
                    수강 시작으로 부터{" "}
                    <span style={{ color: "orange" }}>7일 이내</span> 환불하셔야
                    위약금없이 환불이 가능합니다.
                </div>
                <DetailRefundInfo>전체 환불 정책 보기 {">"}</DetailRefundInfo>
            </RefundNotice>
        </CommonContainer>
    );
});

const ClassInformationContainer = () => {
    const [flag, setFlag] = useState(false);

    const [curSectionName, setCurSectionName] = useState<string>("Review");

    const scrollTarget = useRef<HTMLDivElement[]>([]);
    const tabRef = useRef<HTMLButtonElement>(null);

    const dispatch = useDispatch();

    const { classSimpleInfo } = useSelector(
        (state: RootState) => state.ClassInfoStore
    );

    const targetObject: scrollType = {
        Review: 0,
        Introduce: 1,
        Curriculum: 2,
        Creator: 3,
        Community: 4,
        Refund: 5,
        Recommend: 6,
    };

    const scrollHandler = () => {
        const relativeLocation: any = tabRef?.current?.getBoundingClientRect()
            .top;
        if (relativeLocation <= 0) {
            setFlag(true);
        } else {
            setFlag(false);
        }
    };

    useEffect(() => {
        dispatch(RequestClassInfoData());
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const curTargetView = scrollTarget.current.filter(
                (element: any, idx: number) => {
                    return element.getBoundingClientRect().top <= 57;
                }
            );
            if (curTargetView.length > 0) {
                const targetName: any =
                    curTargetView[curTargetView.length - 1].dataset.name;
                setCurSectionName(targetName);
            }
        });
    }, []);

    const scrollToRef = (event: React.MouseEvent<HTMLButtonElement>) => {
        const element = event.target as HTMLButtonElement;
        const idx = element.value;
        const target = targetObject[idx];

        window.scrollTo({
            behavior: "smooth",
            top: scrollTarget.current[target].offsetTop + 50,
        });
    };

    return (
        <Container>
            <ClassInfoContainer>
                <ImageContainer src={mainImg} alt="main"></ImageContainer>
                <ResponsiveInfoSection />
                <ButtonSpace
                    ref={tabRef}
                    flag={flag}
                    curSectionName={curSectionName}
                    scrollToRef={scrollToRef}
                />
                <ClassSimpleInfoContainer>
                    <ClassSimpleInfoTitle>클래스 정보</ClassSimpleInfoTitle>
                    <ClassSimpleInfo>
                        <Info>
                            클래스 분량
                            <div>{`${classSimpleInfo.chapter}개 챕터, ${classSimpleInfo.videoNumber}개 세부강의`}</div>
                        </Info>
                        <Info>
                            수강 가능일
                            <div>
                                {classSimpleInfo.startDate === "now"
                                    ? "바로 수강 가능"
                                    : classSimpleInfo.startDate}
                            </div>
                        </Info>
                        <Info>
                            자막 포함 여부
                            <div>
                                {classSimpleInfo.Caption ? "포함" : "미포함"}
                            </div>
                        </Info>
                    </ClassSimpleInfo>
                </ClassSimpleInfoContainer>
                <ReviewContainer
                    ref={(refElement) => (scrollTarget.current[0] = refElement)}
                />
                <ClassIntroduceContainer
                    ref={(refElement) => (scrollTarget.current[1] = refElement)}
                />
                <CurriculumContainer
                    ref={(refElement) => (scrollTarget.current[2] = refElement)}
                ></CurriculumContainer>
                <FirstClassExplanation />
                <SecondClassExplanation />
                <CreatorInfoContainer
                    ref={(refElement) => (scrollTarget.current[3] = refElement)}
                />
                <CommunityContainer
                    ref={(refElement) => (scrollTarget.current[4] = refElement)}
                />
                <RefundInfoContainer
                    ref={(refElement) => (scrollTarget.current[5] = refElement)}
                />
                <RecommendContainer
                    ref={(refElement) => (scrollTarget.current[6] = refElement)}
                    data-name="Recommend"
                >
                    <ImageContainer
                        src={RecommendImg}
                        alt="RecommendImg"
                    ></ImageContainer>
                </RecommendContainer>
            </ClassInfoContainer>
            <PurchaseNavBar flag={flag} />
        </Container>
    );
};

export default ClassInformationContainer;
