import React from "react";
import styled from "styled-components";
import { Background } from "./ModalAdvise";

const ModalContainer = styled.div`
  z-index: 10;
  position: absolute;
  width: 592px;
  height: 233px;
  left: 25%;
  top: 265px;
  background: white;
`;

const Title = styled.span`
  position: absolute;
  width: 157px;
  height: 36px;
  left: 32px;
  top: 32px;
  font-family: Montserrat, sans-serif;
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
  left: 32px;
  top: 92px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;
  color: #212121;
`;

const GenericButton = styled.button`
  width: 176px;
  height: 40px;
  position: absolute;
  background: none;
  border: none;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  align-items: center;
  text-align: center;
`;

const DeleteButton = styled(GenericButton)`
  position: absolute;
  bottom: 32px;
  left: 384px;
  right: 32px;
  color: #ffffff;
  background: #212121;
`;

const CancelButton = styled(GenericButton)`
  position: absolute;
  bottom: 32px;
  left: 184px;
  right: 232px;
  border: 1px solid #212121;
`;

const ModalDelete = ({ setModalOpen, naverId, handleDelete }) => (
  <Background>
    <ModalContainer>
      <Title>Excluir Naver </Title>
      <Body>Tem Certeza que deseja excluir esse Naver ?</Body>
      <DeleteButton onClick={() => handleDelete(naverId)}>Excluir</DeleteButton>
      <CancelButton onClick={() => setModalOpen(false)}>Cancelar</CancelButton>
    </ModalContainer>
  </Background>
);

export default ModalDelete;
