import React from "react";
import {
    AuthText,
    ButtonWrapper,
    FancyButton, FancyForm,
    FancyInput,
    FancyLink,
    InnerWrapper,
    InputWrapper,
    Wrapper
} from "./Auth.styled";


function Login({handleSubmit, handleChange, editedUser}) {
    return (
        <Wrapper>
            <InnerWrapper>
                <AuthText HEADER>Sign In</AuthText>
                <FancyForm onSubmit={handleSubmit}>
                    <InputWrapper>
                        <AuthText>Username</AuthText>
                        <FancyInput type="text"
                                    defaultValue={editedUser.userName}
                                    name="userName"
                                    style={{textAlign: "center"}}
                                    onChange={handleChange}/>
                    </InputWrapper>
                    <InputWrapper>
                        <AuthText>Password</AuthText>
                        <FancyInput type="password"
                                    autoComplete="on"
                                    name="password"
                                    style={{textAlign: "center"}}
                                    onChange={handleChange}/>
                    </InputWrapper>
                    <ButtonWrapper>
                        <FancyButton type="submit">
                            <AuthText BUTTON>Log In</AuthText>
                        </FancyButton>
                    </ButtonWrapper>
                </FancyForm>
                <AuthText>Don't have an account yet? : <FancyLink to={"/register"}>Register</FancyLink></AuthText>
            </InnerWrapper>
        </Wrapper>
    );
}

export default Login;
