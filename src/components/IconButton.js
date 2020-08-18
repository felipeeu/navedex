import React from "react";
import styled from "styled-components";
// import closeIcon from "../assets/images/close_icon.svg";

const IconContainer = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  outline: none;
`;
const IconButton = ({ icon }) => (
  <IconContainer>
    <img src={icon} />
  </IconContainer>
);

export default IconButton;
