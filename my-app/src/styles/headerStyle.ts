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
`;

const SearchInput = styled.input`
    width: 60%;
    height: 40px;
    outline: none;
    box-shadow: rgb(0 0 0 / 4%) 0px 0px 1px 0px,
        rgb(41 42 43 / 16%) 0px 1px 3px 0px;

    border-radius: 3px;
    padding-left: 20px;
    margin-right: 44px;
    margin-left: 20px;
    border: 0;
    transition: all 200ms linear;
    &:focus {
        width: 120%;
        background-color: #f8f8f9;
    }
    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    @media only screen and (max-width: 1024px) {
        width: 30%;
        justify-content: flex-start;
    }
    white-space: nowrap;
`;

export { Container, LogoImg, SearchInput, MenuContainer };
