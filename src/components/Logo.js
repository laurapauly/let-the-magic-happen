import React from "react";
import styled from "@emotion/styled";

const AppLogo = styled.h1`
  font-family: "Dancing Script", cursive;
  color: #dd8833;
  margin: 0;
  padding: 20px;
  text-shadow: 3px 3px 4px #777;
  font-size: 25px;
`;

export default function Logo() {
  return <AppLogo>Let the Magic happen</AppLogo>;
}
