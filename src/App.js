import React from "react";
import GlobalStyles from "./components/GlobalStyles.js";
import Header from "./components/Header.js";
import CharacterList from "./components/Main.js";
import Search from "./components/Search.js";
import SearchButton from "./components/SearchButton.js";
import styled from "@emotion/styled";

const SearchBar = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />

      <main>
        <SearchBar>
          <Search></Search>
          <SearchButton></SearchButton>
        </SearchBar>
        <CharacterList></CharacterList>
      </main>
    </>
  );
}

export default App;

async function getHPCharacters() {
  const response = await fetch(`http://hp-api.herokuapp.com/api/characters`);
  const data = await response.json();
  console.log(data);
  return data.actor;
}
console.log(getHPCharacters());
