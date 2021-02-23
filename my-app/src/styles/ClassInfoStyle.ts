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
`;

const ClassMainInfo = styled.div``;

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
};
