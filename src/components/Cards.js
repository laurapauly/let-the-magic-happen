import React from "react";
import styled from "@emotion/styled";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const CharacterTag = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 120px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: #740001;
  border-radius: 10px;
  background-color: black;
  text-align: center;
  font-size: 15px;
`;

const CharacterTitle = styled.h3`
  font-size: 12px;
`;

const CharacterImage = styled.img`
  width: 80%;
  height: 130px;
  border-radius: 5px;
`;

const CharacterHouse = styled.div`
  font-size: 10px;
`;

const CharacterActor = styled.div`
  font-size: 10px;
`;

const CharacterPatronus = styled.div`
  font-size: 10px;
`;

export default function AllCharacters({ loading, characters }) {
  return (
    <List>
      {loading && <div>Alohomora</div>}
      {characters.map(character => (
        <CharacterTag key={character.name}>
          <CharacterImage src={character.image} alt={character.actor} />
          <CharacterTitle>{character.name}</CharacterTitle>
          <CharacterPatronus>Patronus: {character.patronus}</CharacterPatronus>
          <CharacterHouse>House: {character.house}</CharacterHouse>
          <CharacterActor>Actor: {character.actor}</CharacterActor>
        </CharacterTag>
      ))}
    </List>
  );
}
