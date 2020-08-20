import React from "react";
import styled from "styled-components";
import Navers from "../components/Navers";
import AddNaver from "./AddNaver";
import { getNavers, deleteNaver, updateNaver, createNaver } from "../naverAPI";
import Header from "../components/Header";
import ModalDelete from "../components/ModalDelete";
import ModalAdvise from "../components/ModalAdvise";
import { Switch, Route, useHistory } from "react-router-dom";

const MajorContainer = styled.div`
  position: absolute;
  left: 32px;
  right: 32px;
  top: 125px;
`;

const Home = () => {
  let history = useHistory();
  const [naversData, setNaversData] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editForm, setEditForm] = React.useState({
    job_role: "",
    admission_date: "",
    birthdate: "",
    project: "",
    name: "",
    url: ""
  });
  
  const [isAdvising, setIsAdvising] = React.useState({
    title: "",
    body: " ",
    advising: false
  });
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

  const handleCreate = form => {
    let newNaverData = naversData.concat(form);
    createNaver(form)
      .then(response => {
        if (response) {
          setNaversData(newNaverData);
          setIsAdvising({
            title: "Naver criado",
            body: "Naver criado com sucesso",
            advising: true
          });
        }
      })
      .catch(e => console.log(e));

    history.push("/");
  };

  const handleEdit = (id, form) => {
    // updateNaver(form)
    //   .then(response => {
    //     if (response) {
    //       setIsAdvising({
    //         title: "Naver editado",
    //         body: "Naver editado com sucesso",
    //         advising: true
    //       });
    //     }
    //   })
    //   .catch(e => console.log(e));
    setEditForm({ ...form });

    history.push(`/editnaver/${id}`);
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
      ) : isAdvising.advising ? (
        <ModalAdvise isAdvising={isAdvising} setIsAdvising={setIsAdvising} />
      ) : (
        <></>
      )}
      <MajorContainer>
        <Switch>
          <Route exact path="/">
            <Navers
              handleDelete={confirmDelete}
              navers={naversData}
              handleEdit={handleEdit}
            />
          </Route>
          <Route exact path="/editnaver/:id">
            <AddNaver
              editForm={editForm}
              title={"Editar Naver"}
              handleSubmit={handleEdit}
            />
          </Route>
          <Route exact path="/addnaver">
            <AddNaver title={"Adicionar Naver"} handleSubmit={handleCreate} />
          </Route>
        </Switch>
      </MajorContainer>
    </>
  );
};

export default Home;
