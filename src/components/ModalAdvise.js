import React from "react";
import styled from "styled-components";
import closeIcon from "../assets/images/close_icon.svg";
import IconButton from "../components/IconButton";
import { CloseIcon } from "./NaverCard";

export const Background = styled.div`
  z-index: 100000;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
const ModalContainer = styled.div`
  z-index: 10;
  position: absolute;
  width: 592px;
  height: 160px;
  left: 25%;
  top: 265px;
  background-color: white;
`;
const Title = styled.span`
  position: absolute;
  width: auto;
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

const ModalAdvise = ({ isAdvising, setIsAdvising }) => (
  <Background>
    <ModalContainer>
      <CloseIcon>
        <IconButton
          onClick={() => setIsAdvising({ ...isAdvising, advising: false })}
          icon={closeIcon}
        />
      </CloseIcon>
      <Title>{isAdvising && isAdvising.title}</Title>
      <Body>{isAdvising && isAdvising.body}</Body>
    </ModalContainer>
  </Background>
);

export default ModalAdvise;
