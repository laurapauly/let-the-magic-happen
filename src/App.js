import React from "react";
import GlobalStyles from "./components/GlobalStyles.js";
import Header from "./components/Header.js";
import CharacterList from "./components/Main.js";
import Search from "./components/Search.js";
import SearchButton from "./components/SearchButton.js";
import styled from "@emotion/styled";
import AllCharacters from "./components/AllCharacters.js";

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
        <AllCharacters />
        <CharacterList />
      </main>
    </>
  );
}

export default App;
