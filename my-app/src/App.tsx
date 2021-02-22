import React from "react";
import Header from "./Components/Header";
import { GlobalContainer, MainContainer } from "./styles/mainStyle";
import ClassInformation from "./Components/ClassInformation";

function App() {
    return (
        <GlobalContainer>
            <Header />
            <MainContainer>
                <ClassInformation />
            </MainContainer>
        </GlobalContainer>
    );
}

export default App;
