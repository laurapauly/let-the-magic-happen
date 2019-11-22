import React from "react";
import styled from "@emotion/styled";

const SearchInput = styled.input`
  height: 30px;
  width: 80%;
  margin-top: 20px;
  margin-left: 20px;
  background-color: #eeba30;
  border: none;
`;

export default function Search() {
  return <SearchInput placeholder="Expecto Patronum..."></SearchInput>;
}
