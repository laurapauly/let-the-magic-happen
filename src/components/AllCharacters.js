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
        <Poster
          key={character.name}
          src={character.image}
          alt={character.actor}
        />
      ))}
    </List>
  );
}
