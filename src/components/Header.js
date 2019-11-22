import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo.js";
import magic from "../assets/magic.svg";

const AppBar = styled.header`
  background-color: #665849;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  height: 30px;
`;

export default function Header() {
  return (
    <AppBar>
      <Icon src={magic} />
      <Logo />
    </AppBar>
  );
}
