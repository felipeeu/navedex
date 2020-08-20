import React from "react";
import styled from "styled-components";
import ButtonSet from "../components/ButtonSet";
import { useHistory } from "react-router-dom";

const MajorContainer = styled.div`
  position: absolute;
  left: 32px;
  right: 32px;
  top: 125px;
`;

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
  width: 176px;
  height: 40px;
  background: #212121;
  color: #ffffff;
`;
const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 68px;
  width: 100%;
  height: 376px;
`;
const Card = styled.div`
  margin-left: 30px;
  width: 281px;
  height: 420px;
  top: 193px;
`;
const ImageContainer = styled.div`
  height: 285px;
  width: 281px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Name = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: #212121;
`;

const JobRole = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const Navers = ({ handleDelete, handleEdit, navers, setIsNaverSelected }) => {
  let history = useHistory();
  return (
    <MajorContainer>
      <Title>Navers</Title>
      <CreateNaverButton onClick={() => history.push("/addnaver")}>
        Adicionar Naver
      </CreateNaverButton>
      <Container>
        {navers &&
          navers.map((naver, idx) => (
            <Card key={idx}>
              <ImageContainer
                onClick={() =>
                  setIsNaverSelected({ payload: naver, selected: true })
                }
              >
                <Image src={naver.url} />
              </ImageContainer>

              <InfoContainer>
                <Name> {naver.name}</Name>
                <JobRole>{naver.job_role}</JobRole>
                <ButtonSet
                  naverId={naver.id}
                  editParams={naver}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </InfoContainer>
            </Card>
          ))}
      </Container>
    </MajorContainer>
  );
};

export default Navers;
