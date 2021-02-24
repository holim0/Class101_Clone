import React from "react";
import Header from "./Components/Header";
import { GlobalContainer, MainContainer } from "./styles/mainStyle";
import ClassInformation from "./Components/ClassInformation";
import Footer from "./Components/Footer";

function App() {
    return (
        <GlobalContainer>
            <Header />
            <MainContainer>
                <ClassInformation />
            </MainContainer>
            <Footer />
        </GlobalContainer>
    );
}

export default App;
