import React from "react";
import { Container, Button } from "../styles/footerStyle";
import RedeemIcon from "@material-ui/icons/Redeem";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Footer = () => {
    return (
        <Container>
            <FavoriteBorderIcon style={{ marginRight: "10px" }} />
            <RedeemIcon />
            <Button>수강 옵션 구경하기</Button>
        </Container>
    );
};

export default Footer;
