import React from "react";
import styled from "@emotion/styled";

import getHPCharacters from "../api/Characters";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CharacterTag = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: #740001;
  border-radius: 10px;
  background-color: black;
  text-align: center;
  font-size: 15px;
`;

const CharacterTitle = styled.h4``;

const CharacterImage = styled.img`
  width: 80%;
  height: 90px;
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

export default function AllCharacters() {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState([]);

  async function refreshCharacters() {
    setLoading(true);
    const discoverCharacters = await getHPCharacters();
    setLoading(false);
    setCharacters(discoverCharacters);
  }

  React.useEffect(() => {
    refreshCharacters();
  }, []);

  return (
    <List>
      {loading && <div>Alohomora</div>}
      {characters.map(character => (
        <CharacterTag>
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

// export default function CharacterCard() {
//   return (
//     <CharacterTag>
//       <CharacterImage></CharacterImage>
//       <CharacterTitle>Harry</CharacterTitle>
//       <CharacterHouse>Gryffindor</CharacterHouse>
//       <CharacterActor>Daniel Radcliff</CharacterActor>
//     </CharacterTag>
//   );
// }
