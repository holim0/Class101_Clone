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

const SearchForm = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-left: 10px;
    padding: 0 12px;
    background-color: #f8f8f9;
    border: 1px solid rgb(248, 248, 249);
    box-sizing: border-box;
    border-radius: 24px;
    text-align: left;
    color: rgb(26, 26, 26);
    @media only screen and (max-width: 1024px) {
        width: 200%;
    }
`;

const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    font-size: 14px;
    outline: none;
    border-radius: 3px;
    border: 0;
    transition: all 200ms linear;
    background-color: #f8f8f9;
    position: relative;
    &:focus {
        width: 150%;
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

export { Container, LogoImg, SearchInput, MenuContainer, SearchForm };
