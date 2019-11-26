import React from "react";
import styled from "@emotion/styled";

const SearchInput = styled.input`
  height: 30px;
  width: 80%;
  margin-top: 20px;
  margin-left: 20px;
  background-color: ${props => props.theme.highlightcolor};
  border: none;
  border-radius: 5px;
  padding: 5px;
  outline: none;
`;

//function upperCaseFirstChar(string) {
// return string.charAt(0).toUpperCase() + string.slice(1);
//}

export default function Search({ onInput }) {
  return (
    <SearchInput
      onInput={onInput}
      placeholder="Expecto Patronum..."
    ></SearchInput>
  );
}

//  const [characterName, setCharacterName] = React.useState();

//onChange={event => {
// const newSearchValue = upperCaseFirstChar(event.target.value);
// setCharacterName(newSearchValue);
