import React from "react";
import {HomePageWrapper} from "./Home.styled";

export default function Home() {
    return (
        <HomePageWrapper>
            <div style={{position: "absolute", margin: "15%", color: "white"}}>
                <button onClick={()=>localStorage.removeItem("user")}>Remove localStorage usre</button>
                <p style={{margin: 0}}>Some news</p>
                <hr/>
                <p style={{margin: 0}}>Some other news</p>
                <hr/>
                <p style={{margin: 0}}>Some other news</p>
                <hr/>
                <p style={{margin: 0}}>Some other news</p>
                <hr/>
                <p style={{margin: 0}}>Some other news</p>
            </div>
        </HomePageWrapper>
    );
}
