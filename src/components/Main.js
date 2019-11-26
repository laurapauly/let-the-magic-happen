import React from "react";

import styled from "@emotion/styled";
import AllCharacters from "./Cards";
import getHPCharacters from "../api/Characters.js";
import GlobalStyles from "../utils/GlobalStyles.js";
import Header from "./Header.js";
import Search from "./Search.js";
import SearchButton from "./SearchButton.js";

const SearchBar = styled.div`
  display: flex;
`;

const MainField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Main() {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [inputValue, setInputValue] = React.useState("");

  const onInputChanged = function(event) {
    setInputValue(event.target.value);
  };

  async function refreshCharacters() {
    setLoading(true);
    const result = await getHPCharacters();
    setLoading(false);
    setCharacters(result);
  }

  React.useEffect(() => {
    refreshCharacters();
  }, []);

  const filter = function() {
    setCharacters(
      characters.filter(function(character) {
        if (inputValue === "") {
          return true;
        }
        return character.name.indexOf(inputValue) > -1;
      })
    );
  };

  return (
    <>
      <GlobalStyles />
      <Header />

      <SearchBar>
        <Search onInput={onInputChanged}></Search>
        <SearchButton onClick={filter}></SearchButton>
      </SearchBar>
      <MainField>
        <AllCharacters loading={loading} characters={characters} />
      </MainField>
    </>
  );
}

// Nur das 1. Wort in der Suche großschreiben:
// const value= event.target.value;
// const newSearchValue = value.charAt(0) + value.slice(1)
