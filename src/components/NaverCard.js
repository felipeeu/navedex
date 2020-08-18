import React from "react";
import styled from "styled-components";

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
  background-color: cyan;
`;

const ImageContainer = styled.div`
width: 50%;

`;
const InfoContainer = styled.div``;
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

const DataNaver = ({ data, info }) => (
  <DataContainer>
    <Data>{data}</Data>
    <Info>{info}</Info>
  </DataContainer>
);



const NaverCard = () => (
  <CardContainer>
    <CardDivision>
      <ImageContainer><img src= {"https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"}/></ImageContainer>
      <DataContainer>
        <Name>Felipe Domingues</Name>
        <Position>Fullstack</Position>
        <DataNaver data={"Idade"} info={"35"} />
        <DataNaver data={"Tempo na Empresa"} info={"20 anos"} />
        <DataNaver data={"Projeto que participou"} info={"vários"} />
      </DataContainer>
      {/* <ImageContainer>teste</ImageContainer>
      <InfoContainer>TEste 2</InfoContainer> */}
    </CardDivision>
  </CardContainer>
);

export default NaverCard;
