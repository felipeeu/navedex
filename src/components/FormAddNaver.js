import React from "react";
import styled from "styled-components";
import { createNaver } from "../naverAPI";
import { useHistory } from "react-router-dom";

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
const InputLabel = styled.span`
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

const Input = ({ label, onChange }) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <CurrentInput onChange={onChange} />
  </InputWrapper>
);

const FormAddNaver = () => {
  let history = useHistory();
  const [form, setForm] = React.useState({
    job_role: "",
    admission_date: "",
    birthdate: "",
    project: "",
    name: "",
    url: ""
  });

  const handleSubmit = () => {
    createNaver(form)
      .then(response => (response ? history.push("/home") : null))
      .catch(e => console.log(e));
  };

  return (
    <Container>
      <InputsContainer>
        <Input
          onChange={e => setForm({ ...form, name: e.target.value })}
          label={"Nome"}
        />
        <Input
          onChange={e => setForm({ ...form, job_role: e.target.value })}
          label={"Cargo"}
        />
        <Input
          onChange={e => setForm({ ...form, birthdate: e.target.value })}
          label={"Idade"}
        />
        <Input
          onChange={e => setForm({ ...form, admission_date: e.target.value })}
          label={"Tempo de Empresa"}
        />
        <Input
          onChange={e => setForm({ ...form, project: e.target.value })}
          label={"Projetos que participou"}
        />
        <Input
          onChange={e => setForm({ ...form, url: e.target.value })}
          label={"URL da foto do Naver"}
        />
      </InputsContainer>
      <ButtonContainer>
        <ButtonSave onClick={handleSubmit}>
          <TextButton>Salvar</TextButton>
        </ButtonSave>
      </ButtonContainer>
    </Container>
  );
};

export default FormAddNaver;
