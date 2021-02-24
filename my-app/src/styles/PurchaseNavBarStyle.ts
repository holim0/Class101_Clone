import styled from "styled-components";

const PurchaseContainer = styled.div<{ flag: boolean }>`
    display: none;
    margin-left: 20px;
    @media only screen and (min-width: 1024px) {
        width: 33%;
        display: block;
    }
    max-height: 100vh;
    overflow: auto;
    padding-left: 4px;
    padding-right: 4px;
    position: sticky;
    top: ${(props) => (props.flag ? "48px" : "0")};
`;

const ControlContainer = styled.div`
    border-radius: 3px;
    box-shadow: rgb(41 42 43 / 16%) 0px 2px 6px -2px;
    border: 1px solid rgb(255, 255, 255);
    padding: 24px;
`;

const Title = styled.div`
    margin-bottom: 8px;
    word-break: keep-all;
    font-size: 20px;
    font-weight: bold;
`;

const CategoryTitle = styled.div`
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(27, 28, 29);
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-top: 20px;
    font-weight: 700;
    padding-bottom: 20px;
`;

const VideoContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-wrap: wrap;
    border-bottom: 1px solid rgb(237, 239, 240);
    border-top: 1px solid rgb(237, 239, 240);
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 16px;
    padding: 0 20px;
    & > button {
        width: 30%;
        border: 0;
        outline: none;
        cursor: pointer;
        background-color: rgb(248, 248, 249);
        font-weight: 500;
        border-radius: 3px;
        font-size: 14px;
        padding: 0px 14px;
        height: 40px;
        white-space: nowrap;
        transition: background-color 0.1s ease 0s;
    }

    & > button:hover {
        background-color: #bdbdbd;
    }
`;

const OptionContainer = styled.div`
    display: flex;
`;

const Option = styled.div`
    min-width: 24px;
    height: 24px;
    border-radius: 3px;
    padding: 6px;
    color: gray;
    background-color: rgb(248, 248, 249);
    margin-right: 4px;
    margin-bottom: 4px;
`;

const MoreOptionBtn = styled.button`
    width: 100%;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 146, 43);
    font-weight: 700;
    font-size: 16px;
    border: 0;
    outline: none;
    height: 48px;
    border-radius: 3px;
`;

export {
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
};