import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 14px 0;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    position: relative;
    @media only screen and (max-width: 1024px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const LogoImg = styled.img`
    width: 110px;
    cursor: pointer;
    @media only screen and (max-width: 1024px) {
        width: 90px;
    }
`;

const SearchInput = styled.input`
    width: 60%;
    height: 40px;
    font-size: 14px;
    outline: none;
    box-shadow: rgb(0 0 0 / 4%) 0px 0px 1px 0px,
        rgb(41 42 43 / 16%) 0px 1px 3px 0px;

    border-radius: 3px;
    border: 0;
    padding-left: 20px;
    margin-left: 20px;
    transition: all 200ms linear;
    &:focus {
        width: 100%;
        background-color: #f8f8f9;
    }
    @media only screen and (max-width: 1024px) {
        width: 200%;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    width: 100%;
    cursor: pointer;
    white-space: nowrap;
    @media only screen and (max-width: 1024px) {
        justify-content: flex-start;
    }
    & > div {
        padding: 10px;
    }
`;

export { Container, LogoImg, SearchInput, MenuContainer };
