import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 68px;
  width: 100%;
  height: auto;
  background-color: yellow;
`;
const Input = styled.input`
  width: 280px;
  height: 40px;
`;
const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  grid-row-gap: 54px;
`;
const InputName = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
`;

const ButtonSave = styled.button`
  background: #212121;
`;
const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 264px;
`;

const InputWrapper = name => (
  <div>
    <InputName>nome</InputName>
    <Input />
  </div>
);

const FormAddNaver = () => (
  <>
    <Container>
      <InputsContainer>
        <InputWrapper />
        <InputWrapper />
        <InputWrapper />
        <InputWrapper />
        <InputWrapper />
        <InputWrapper />
      </InputsContainer>
      <ButtonContainer>
        <ButtonSave>Salvar</ButtonSave>
      </ButtonContainer>
    </Container>
  </>
);

export default FormAddNaver;
