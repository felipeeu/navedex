import React from "react";
import styled from "styled-components";
import closeIcon from "../assets/images/close_icon.svg";
import IconButton from "../components/IconButton"

const ModalContainer = styled.div`
  position: absolute;
  width: 592px;
  height: 160px;
  left: 25%;
  top: 265px;
  background: pink;
`;
const IconContainer = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
`;
const Title = styled.span`
  position: absolute;
  width: 157px;
  height: 36px;
  left: 32px;
  top: 32px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #212121;
`;
const Body = styled.span`
  position: absolute;
  width: 213px;
  height: 36px;
  left: 32px;
  top: 92px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;
  align-items: center;
  color: #212121;
`;

const ModalAdvise = ({text , body}) => (
  <ModalContainer>
    {/* <IconContainer>
      <img src={closeIcon} />
    </IconContainer> */}
    <IconButton icon ={closeIcon}/>
    <Title>Naver Criado</Title>
    <Body>Naver criado com sucesso!</Body>
  </ModalContainer>
);

export default ModalAdvise;
