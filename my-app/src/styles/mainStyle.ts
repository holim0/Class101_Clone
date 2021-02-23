import styled from "styled-components";

const GlobalContainer = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    @media only sreen and (max-width: 1024px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
`;

const MainContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`;

export { GlobalContainer, MainContainer };
