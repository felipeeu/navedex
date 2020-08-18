import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 68px;
  width: 100%;
  height: auto;
  
`;
const CurrentInput = styled.input`
  width: 280px;
  height: 40px;
`;
const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  grid-row-gap: 32px;
`;
const InputName = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonSave = styled.button`
  background: #212121;
  width: 100%;
  height: 100%;
`;
const ButtonContainer = styled.div`
  position: absolute;
  width: 176px;
  height: 40px;
  right: 0;
  top: 264px;
`;
const TextButton = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const Input = ({ label }) => (
  <InputWrapper>
    <InputName>{label}</InputName>
    <CurrentInput />
  </InputWrapper>
);

const FormAddNaver = () => (
  <>
    <Container>
      <InputsContainer>
        <Input label={"Nome"} />
        <Input label={"Cargo"} />
        <Input label={"Idade"} />
        <Input label={"Tempo de Empresa"} />
        <Input label={"Projetos que participou"} />
        <Input label={"URL da foto do Naver"} />
      </InputsContainer>
      <ButtonContainer>
        <ButtonSave>
          {" "}
          <TextButton>Salvar</TextButton>
        </ButtonSave>
      </ButtonContainer>
    </Container>
  </>
);

export default FormAddNaver;
