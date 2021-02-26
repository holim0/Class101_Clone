import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    display: none;
    background-color: white;
    z-index: 1000;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 16%) 0px -3px 6px -2px;
    padding: 20px;
    height: 72px;
    @media only screen and (max-width: 1024px) {
        display: flex;
        position: sticky;
        bottom: 0;
        width: 100%;
    }
`;

const Button = styled.div`
    cursor: pointer;
    width: 100%;
    background-color: rgb(255, 146, 43);
    font-weight: 700;
    font-size: 16px;
    height: 48px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 20px;

    transition: background-color ease 0.5s;
    &:hover {
        background-color: #ffb74d;
    }
`;

export { Container, Button };
