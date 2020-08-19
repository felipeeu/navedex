import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import closeIcon from "../assets/images/close_icon.svg";
import deleteIcon from "../assets/images/delete_icon.svg";
import editIcon from "../assets/images/edit_icon.svg";

const CardContainer = styled.div`
  position: absolute;
  width: 1006px;
  height: 503px;
  left: 138px;
  top: 109px;
  background: #ffffff;
`;
const CardDivision = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  background-color: aliceblue;
`;

const Name = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #000000;
`;
const Position = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;
const DataContainer = styled.div`
  padding: 24px 0px 0px 10px;
  display: flex;
  flex-direction: column;
`;
const Data = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;
const Info = styled(Position)``;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8KnsezdZ8m3bzHkGj152r7pzSiwXWBtTK7Q&usqp=CAU");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 21px;
  right: 21px;
`;
const IconSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 48.41px;
  height: 18px;
  /* position: absolute;
  bottom: 27px;
  left: 35.2px; */
`;

const DataNaver = ({ data, info }) => (
  <DataContainer>
    <Data>{data}</Data>
    <Info>{info}</Info>
  </DataContainer>
);

const NaverCard = () => (
  <CardContainer>
    <CardDivision>
      <CloseIcon>
        <IconButton icon={closeIcon} />
      </CloseIcon>
      <Image />
      <DataContainer>
        <Name>Felipe Domingues</Name>
        <Position>Fullstack</Position>
        <DataNaver data={"Idade"} info={"35"} />
        <DataNaver data={"Tempo na Empresa"} info={"20 anos"} />
        <DataNaver data={"Projeto que participou"} info={"vários"} />
        {/* <IconSet>
          <IconButton icon={deleteIcon} />
          <IconButton icon={editIcon} />
        </IconSet> */}
      </DataContainer>
    </CardDivision>
  </CardContainer>
);

export default NaverCard;
