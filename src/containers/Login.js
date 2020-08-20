import React from "react";
import styled from "styled-components";
import naveIcon from "../assets/images/nave_icon.svg";
import { loginUser } from "../naverAPI";
import { useHistory } from "react-router-dom";

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
  font-family: Montserrat, sans-serif;
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

const EnterButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 32px;
  width: 384px;
  height: 40px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  align-items: center;
  text-align: center;

  color: #ffffff;
  background: #212121;
`;

const Login = () => {
  let history = useHistory();
  const [loginData, setLoginData] = React.useState({});

  const handleLogin = () => {
    loginUser(loginData)
      .then(response => response)
      .catch(e => console.log(e));
    setTimeout(() => history.push("/"), 1500);
  };

  return (
    <Container>
      <NaveIcon>
        <img src={naveIcon} alt="logo" />
      </NaveIcon>
      <EmailText>Email</EmailText>
      <EmailContainer>
        <Input
          placeholder="E-mail"
          onChange={e => setLoginData({ ...loginData, email: e.target.value })}
        />
      </EmailContainer>
      <PasswordText>Password</PasswordText>
      <PasswordContainer>
        <Input
          placeholder="Senha"
          onChange={e =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          type="password"
        />
      </PasswordContainer>
      <EnterButton onClick={handleLogin}>Entrar</EnterButton>
    </Container>
  );
};

export default Login;
