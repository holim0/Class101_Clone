import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 32px;
`;

const ClassInfoContainer = styled.div`
    width: 100%;
    position: relative;
    @media only screen and (min-width: 1024px) {
        width: 67%;
        height: auto;
    }
`;

const PurchaseContainer = styled.div``;

const ImageContainer = styled.img`
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    font-size: 14px;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
    box-shadow: rgb(237 239 240) 0px -1px 0px 0px inset;
`;
const ButtonInside = styled.div`
    padding: 1px;
`;

const Btn = styled.button`
    color: rgb(133, 138, 141);
    padding: 14px 0px 13px;
    outline: none;
    border: 0;
    background-color: white;
    cursor: pointer;
    margin-right: 24px;
    &:nth-child(1) {
        border-bottom: 3px solid black;
        color: black;
    }
    &:focus {
        border-bottom: 3px solid black;
        color: black;
    }
`;

const ClassSimpleInfoContainer = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgb(237, 239, 240);
    white-space: nowrap;
`;

const ClassSimpleInfoTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    margin: 0px 0px 16px;
    font-weight: bold;
    color: rgb(0, 0, 0);
`;

const ClassSimpleInfo = styled.div`
    display: flex;
    margin: 0;
    width: 75%;
    justify-content: space-between;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

const Info = styled.div`
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px 12px 0px 0px;
    color: rgb(133, 138, 141);
    display: flex;

    & > div {
        color: black;
        margin-left: 12px;
    }

    @media only screen and (max-width: 1024px) {
        margin-bottom: 12px;
    }
`;

const ClassMainInfo = styled.div``;

const IntroduceTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: rgb(27, 28, 29);
    line-height: 34px;
    letter-spacing: -0.4px;
    position: relative;
    width: 100%;
    margin: 48px 0px 24px;
`;

const CommonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0px;
    border-bottom: 2px solid rgba(16, 22, 26, 0.15);
    padding-bottom: 20px;
    padding-top: 20px;
`;

const Text = styled.div`
    margin-top: 20px;
    padding-bottom: 20px;
`;

const TextTitle = styled.div<{ shape: string }>`
    font-size: 20px;
    font-weight: ${(props) => props.shape || "bold"};
    line-height: 28px;
    margin-bottom: 15px;
`;

const MoreInfoButton = styled.button`
    margin-top: 30px;
    margin-bottom: 30px;
    outline: none;
    padding: 20px 32px;
    background-color: black;
    color: white;
    font-size: 30px;
    cursor: pointer;
    border-radius: 8px;
    border: 0;
    display: flex;
    justify-content: space-around;
`;

const List = styled.ul`
    font-size: 16px;
    & > li {
        margin-bottom: 4px;
    }
`;

const CircleImg = styled.img`
    border-radius: 50%;
    border: 1px solid rgba(16, 22, 26, 0.15);
    height: 62px;
`;

const RefundNotice = styled.div`
    background-color: rgb(248, 248, 249);
    padding: 24px 24px;
`;

const DetailRefundInfo = styled.div`
    cursor: pointer;
    color: rgb(168, 174, 179);
    transition: color 0.2s ease 0s;
    &:hover {
        text-decoration: underline;
        color: gray;
    }
`;

export {
    ClassInfoContainer,
    PurchaseContainer,
    Container,
    ImageContainer,
    ButtonContainer,
    Btn,
    ButtonInside,
    ClassSimpleInfoContainer,
    ClassSimpleInfoTitle,
    ClassSimpleInfo,
    Info,
    ClassMainInfo,
    IntroduceTitle,
    CommonContainer,
    List,
    Text,
    TextTitle,
    MoreInfoButton,
    CircleImg,
    RefundNotice,
    DetailRefundInfo,
};
