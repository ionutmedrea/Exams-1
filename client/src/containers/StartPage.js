import React from "react";
import {FancyImage, FancyLink, PenWrapper, StartPageWrapper} from "./Home.styled";

export default function StartPage() {
    return (
        <StartPageWrapper>
            <FancyLink to={"/login"}>
                <PenWrapper>
                    <FancyImage src="https://pngriver.com/wp-content/uploads/2018/04/Download-Fountain-Pen-PNG-Clipart.png"
                         alt=""/>
                </PenWrapper>
            </FancyLink>
        </StartPageWrapper>
    );
}
