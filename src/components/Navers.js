import React from "react";
import styled from "styled-components";
import ButtonSet from "./ButtonSet";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 205px;
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

const Navers = ({ handleDelete, handleEdit, navers }) => {
  return (
    <Container>
      {navers &&
        navers.map((naver, idx) => (
          <Card key={idx}>
            <ImageContainer>
              <Image src={naver.url} />
            </ImageContainer>

            <InfoContainer>
              <Name> {naver.name}</Name>
              <JobRole>{naver.job_role}</JobRole>
              <ButtonSet
                naverId={naver.id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </InfoContainer>
          </Card>
        ))}
    </Container>
  );
};

export default Navers;
