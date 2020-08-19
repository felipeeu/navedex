import React from "react";
import styled from "styled-components";
import Navers from "../components/Navers";
import { getNavers, deleteNaver, updateNaver } from "../naverAPI";
import Header from "../components/Header";
import ModalDelete from "../components/ModalDelete";

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
  const [naversData, setNaversData] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [naverId, setNaverId] = React.useState("");

  React.useEffect(() => {
    getNavers()
      .then(response => setNaversData(response.data))
      .catch(e => console.log(e));
  }, []);

  const confirmDelete = id => {
    setNaverId(id);
    setModalOpen(true);
  };

  const deleteConfirmed = id => {
    let filteredNavers = naversData.filter(naver => naver.id !== naverId);

    deleteNaver(id).then(response =>
      response ? setNaversData(filteredNavers) : setNaversData(naversData)
    );
    setModalOpen(false);
  };

  return (
    <>
      <Header />

      {modalOpen ? (
        <ModalDelete
          setModalOpen={setModalOpen}
          handleDelete={deleteConfirmed}
          naverId={naverId}
        />
      ) : (
        <></>
      )}
      <MajorContainer>
        <Title>Navers</Title>
        <CreateNaverButton>Adicionar Naver</CreateNaverButton>
        <NaversContainer>
          <Navers handleDelete={confirmDelete} navers={naversData} />
        </NaversContainer>
      </MajorContainer>
    </>
  );
};

export default Home;
