import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo.js";
import magic from "../assets/magic.svg";

const AppBar = styled.header`
  background-color: ${props => props.theme.secondcolor};
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
