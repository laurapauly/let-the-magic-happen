import React from "react";
import styled from "@emotion/styled";
import getHPCharacters from "../api/Characters.js";

const CharacterTag = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 33%;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: #740001;
  border-radius: 10px;
  background-color: black;
`;

const CharacterTitle = styled.h4``;

const CharacterImage = styled.img`
  width: 80%;
  height: 100px;
`;

const CharacterHouse = styled.div`
  font-size: 15px;
`;

const CharacterActor = styled.div``;

export default function CharacterCard() {
  return (
    <CharacterTag>
      <CharacterImage></CharacterImage>
      <CharacterTitle>Harry</CharacterTitle>
      <CharacterHouse>Gryffindor</CharacterHouse>
      <CharacterActor>Daniel Radcliff</CharacterActor>
    </CharacterTag>
  );
}
