import React from "react";
import styled from "@emotion/styled";

import getHPCharacters from "../api/Characters";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Poster = styled.img`
  width: 100px;
  padding: 10px;
`;

export default function AllCharacters() {
  const [characters, setCharacters] = React.useState([]);

  async function refreshCharacters() {
    const discoverCharacters = await getHPCharacters();
    setCharacters(discoverCharacters);
  }

  React.useEffect(() => {
    refreshCharacters();
  }, []);

  return (
    <List>
      {characters.map(character => (
        <Poster
          key={character.name}
          src={character.image}
          alt={character.actor}
        />
      ))}
    </List>
  );
}
