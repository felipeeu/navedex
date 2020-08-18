import React from "react";
import styled from "styled-components";
import naveIcon from "../assets/images/nave_icon.svg";

const Container = styled.div`
  position: absolute;
  width: 448px;
  height: 408px;
  left: 416px;
  top: 156px;

  border: 1px solid #212121;
  box-sizing: border-box;
`;

const NaveIcon = styled.div`
  position: absolute;
  top: 40px;
  left: 106px;
`;

const EmailContainer = styled.div`
  position: absolute;
  top: 162px;
  left: 32px;
`;
const PasswordContainer = styled.div`
  position: absolute;
  top: 256px;
  left: 32px;
`;
const Input = styled.input`
  background: #ffffff;
  width: 384px;
  height: 40px;
  border: 1px solid #424242;
  box-sizing: border-box;
`;
const Text = styled.span`
  position: absolute;
  width: 60.34px;
  height: 18px;
  left: 32px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #212121;
`;
const EmailText = styled(Text)`
  top: 140px;
`;
const PasswordText = styled(Text)`
  top: 234px;
`;
const Login = () => (
  <>
    <Container>
      <NaveIcon>
        <img src={naveIcon} />
      </NaveIcon>
      <EmailText>Email</EmailText>
      <EmailContainer>
        <Input />
      </EmailContainer>
      <PasswordText>Password</PasswordText>
      <PasswordContainer>
        <Input />
      </PasswordContainer>
    </Container>
  </>
);

export default Login;
