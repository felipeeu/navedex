import React from "react";
import styled from "styled-components";
import naveIcon from "../assets/images/nave_icon.svg";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 85px;
  left: 0px;
  top: 0px;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 24px;
  left: 32px;
`;
const ExitButton = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
const ButtonContainer = styled.div`
  position: absolute;
  width: 28px;
  height: 24px;
  right: 32px;
  top: 30px;
`;

const Header = () => {
  let history = useHistory();

  return (
    <Container>
      <ImageContainer>
        <img src={naveIcon} />
      </ImageContainer>
      <ButtonContainer>
        <ExitButton
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/");
          }}
        >
          Sair
        </ExitButton>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
