import React from "react";
import styled from "styled-components";
import naveIcon from "../assets/images/nave_icon.svg";
import Navers from "../components/Navers";
import { getNavers } from "../naverAPI";
import Header from "../components/Header";

const Title = styled.span`
  position: absolute;
  width: 141px;
  height: 48px;
  top: 0;
  left: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;

  color: #212121;
`;

const CreateNaverButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
const MajorContainer = styled.div`
  position: absolute;
  left: 32px;
  right: 32px;
  top: 125px;
  background-color: yellow;
`;
const NaversContainer = styled.div`
  position: absolute;
  top: 80px;
`;

const Home = () => {
  const [naversData, sertNaversData] = React.useState([]);
  React.useEffect(() => {
    getNavers()
      .then(response => sertNaversData(response.data))
      .catch(e => console.log(e));
  });

  return (
    <>
      <Header />
      <MajorContainer>
        <Title>Navers</Title>
        <CreateNaverButton>Adicionar Naver</CreateNaverButton>
        <NaversContainer>
          <Navers navers={naversData} />
        </NaversContainer>
      </MajorContainer>
    </>
  );
};

export default Home;
