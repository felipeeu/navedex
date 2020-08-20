import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import deleteButton from "../assets/images/delete_icon.svg";
import editButton from "../assets/images/edit_icon.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonSet = ({ handleDelete, handleEdit, naverId , editParams }) => (
  <Container>
    <IconButton onClick={() => handleDelete(naverId)} icon={deleteButton} />
    <IconButton onClick={() =>handleEdit(naverId, editParams)} icon={editButton} />
  </Container>
);

export default ButtonSet;
