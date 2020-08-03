import React from "react";
import {
    ButtonSection,
    DetailCardWrapper,
    DetailImageSection,
    ImgThumbnail,
    InfoDetailSection,
    InfoDetailWrapper,
    UserInfoSection
} from "./styledCards";

function UserDetailCard({username, user}) {
return(
    <DetailCardWrapper>
        <DetailImageSection>
            <ImgThumbnail detail
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                alt=""/>
            <UserInfoSection>
                <p>{username}</p>
                <p>City Country</p>
            </UserInfoSection>
        </DetailImageSection>
        <InfoDetailWrapper>
            <InfoDetailSection>
                <div>
                <p>email:{user.email}</p>
                <p>role:{user.role}</p>
                </div>
                <div>
                <p>Info section 1</p>
                <p>Info section 1</p>
                </div>
                <div>
                <p>Info section 1</p>
                <p>Info section 1</p>
                </div>
            </InfoDetailSection>
            <InfoDetailSection>
                <div>
                    <p>username:{user.userName}</p>
                    <p>password:{user.password}</p>
                </div>
                <div>
                    <p>Info section 2</p>
                    <p>Info section 2</p>
                </div>
                <div>
                    <p>Info section 2</p>
                    <p>Info section 2</p>
                </div>

            </InfoDetailSection>
        </InfoDetailWrapper>
        <ButtonSection>
            <button>Do somethong</button>
            <button>Do else</button>
            <button>Return</button>
        </ButtonSection>
    </DetailCardWrapper>
);
}

export default UserDetailCard;
