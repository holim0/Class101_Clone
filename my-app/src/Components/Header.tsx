import React from "react";
import logoImg from "../assets/logoImg.png";
import {
    Container,
    LogoImg,
    SearchInput,
    MenuContainer,
} from "../styles/headerStyle";

const Header = () => {
    const handleLogoImg = () => {
        window.location.href = "https://class101.net/";
    };

    return (
        <Container>
            <LogoImg src={logoImg} onClick={handleLogoImg}></LogoImg>
            <SearchInput placeholder="배우고 싶은 것이 있나요?" />
            <MenuContainer>
                <div>크리에이터 지원</div>
                <div>로그인</div>
            </MenuContainer>
        </Container>
    );
};

export default Header;
