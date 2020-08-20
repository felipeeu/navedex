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

const Input = ({ label, onChange, value }) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <CurrentInput value={value} onChange={onChange} />
  </InputWrapper>
);

const FormAddNaver = ({ handleSubmit, editForm }) => {
  const [form, setForm] = React.useState({
    job_role: editForm.job_role || "",
    admission_date: editForm.admission_date || "",
    birthdate: editForm.birthdate || "",
    project: editForm.project || "",
    name: editForm.name || "",
    url: editForm.url || ""
  });
  console.log("FORMNAVER", editForm.name, "FORM", form);
  return (
    <Container>
      <InputsContainer>
        <Input
          onChange={e => setForm({ ...form, name: e.target.value })}
          label={"Nome"}
          value={form.name}
        />
        <Input
          onChange={e => setForm({ ...form, job_role: e.target.value })}
          label={"Cargo"}
          value={form.job_role}
        />
        <Input
          onChange={e => setForm({ ...form, birthdate: e.target.value })}
          label={"Data de Nascimento"}
          value={form.birthdate}
        />
        <Input
          onChange={e => setForm({ ...form, admission_date: e.target.value })}
          label={"Data de admissão"}
          value={form.admission_date}
        />
        <Input
          onChange={e => setForm({ ...form, project: e.target.value })}
          label={"Projetos que participou"}
          value={form.project}
        />
        <Input
          onChange={e => setForm({ ...form, url: e.target.value })}
          label={"URL da foto do Naver"}
          value={form.url}
        />
      </InputsContainer>
      <ButtonContainer>
        <ButtonSave onClick={() => handleSubmit(form)}>
          <TextButton>Salvar</TextButton>
        </ButtonSave>
      </ButtonContainer>
    </Container>
  );
};

export default FormAddNaver;
