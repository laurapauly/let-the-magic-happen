import React from "react";
import GlobalStyles from "./components/GlobalStyles.js";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import SearchButton from "./components/SearchButton.js";
import styled from "@emotion/styled";
import CharacterList from "./components/Main";

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
        <CharacterList />
      </main>
    </>
  );
}

export default App;
