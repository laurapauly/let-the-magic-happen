import React from "react";
// import getHPCharacters from "../api/Characters.js";
import styled from "@emotion/styled";
import AllCharacters from "./Cards";

const MainField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// const CharacterImage = styled.img``;

// export default function CharactersList() {
//   const [characters, setCharacters] = React.useState([]);

//   async function refreshCharacters() {
//     const searchCharacters = await getHPCharacters;
//     setCharacters(searchCharacters);
//   }

//   return (
//     <CharacterTag>
//       {/* {characters.map(character => (
//         <div key={character.id}>
//           <CharacterImage src={character.img} alt={character.name} />
//         </div>
//       ))} */}
//     </CharacterTag>
//   );
// }

export default function CharacterList() {
  return (
    <MainField>
      <AllCharacters />
    </MainField>
  );
}
