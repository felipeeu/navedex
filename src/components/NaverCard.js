import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import closeIcon from "../assets/images/close_icon.svg";
import { Background } from "./ModalAdvise";
import ButtonSet from "./ButtonSet";
import moment from "moment";
moment.langData("en")._relativeTime.yy = "%d anos";
moment.langData("en")._relativeTime.past = "%s";
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
  background-color: white;
`;

const Name = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #000000;
`;
const Position = styled.span`
  font-family: Montserrat, sans-serif;
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
  font-family:Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;
const Info = styled(Position)``;

const Image = styled.img`
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 458px;
`;
export const CloseIcon = styled.div`
  position: absolute;
  top: 21px;
  right: 21px;
`;

const DataNaver = ({ data, info }) => (
  <DataContainer>
    <Data>{data}</Data>
    <Info>{info}</Info>
  </DataContainer>
);

const NaverCard = ({
  naver,
  naverSelected,
  setIsNaverSelected,
  handleDelete,
  handleEdit
}) => (
  <Background>
    <CardContainer>
      <CardDivision>
        <CloseIcon>
          <IconButton
            icon={closeIcon}
            onClick={() =>
              setIsNaverSelected({ ...naverSelected, selected: false })
            }
          />
        </CloseIcon>
        <Image src={naver.url} />
        <DataContainer>
          <Name>{naver.name}</Name>
          <Position>{naver.job_role}</Position>
          <DataNaver data={"Idade"} info={moment(naver.birthdate).fromNow()} />
          <DataNaver
            data={"Tempo na Empresa"}
            info={moment(naver.admission_date).fromNow()}
          />
          <DataNaver data={"Projeto que participou"} info={naver.project} />
          <ButtonContainer>
            <ButtonSet
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              editParams={naver}
              naverId={naver.id}
            />
          </ButtonContainer>
        </DataContainer>
      </CardDivision>
    </CardContainer>
  </Background>
);

export default NaverCard;
