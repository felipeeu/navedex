import React from "react";
import styled from "styled-components";

const IconContainer = styled.button`
  border: none;
  background: none;
  outline: none;
`;
const IconButton = ({ icon, onClick }) => (
  <IconContainer onClick={onClick}>
    <img src={icon} alt="icon" />
  </IconContainer>
);

export default IconButton;
