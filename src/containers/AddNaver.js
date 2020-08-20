import React from "react";
import styled from "styled-components";
import backIcon from "../assets/images/back_icon.svg";
import FormAddNaver from "../components/FormAddNaver";
import IconButton from "../components/IconButton";
import { useHistory } from "react-router-dom";

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

  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #212121;
`;

const AddNaver = ({ title, handleSubmit, editForm, naverId, editing }) => {
  let history = useHistory();
  return (
    <Container>
      <BackIcon>
        <IconButton icon={backIcon} onClick={() => history.push("/")} />
      </BackIcon>
      <Title>{title}</Title>
      <FormAddNaver
        editForm={editForm}
        handleSubmit={handleSubmit}
        naverId={naverId}
        editing={editing}
      />
    </Container>
  );
};

export default AddNaver;
