import React from "react";
import styled from "styled-components";
import backIcon from "../assets/images/back_icon.svg";
import Header from "../components/Header";
import FormAddNaver from "../components/FormAddNaver"

const Container = styled.div`
  position: absolute;
  top: 125px;
  left: 344px;
  right: 344px;
  bottom: 277px;

`;
const BackIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.span`
  position: absolute;
  width: 198px;
  height: 36px;
  left: 32px;
  top: 0;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  color: #212121;
`;

const AddNaver = () => (
  <>
    <Header />
    <Container>
      <BackIcon>
        <img src={backIcon} />
      </BackIcon>
      <Title>Adicionar Naver</Title>
      <FormAddNaver/>
    </Container>
  </>
);

export default AddNaver;
