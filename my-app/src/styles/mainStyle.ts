import styled from "styled-components";

const GlobalContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    @media only sreen and (max-width: 1239px) and (min-width: 1024px) {
        margin-left: 32px;
        margin-right: 32px;
    }
`;

const MainContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`;

export { GlobalContainer, MainContainer };
