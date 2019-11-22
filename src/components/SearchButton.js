import React from "react";
import styled from "@emotion/styled";
import magicWand from "../assets/magic-wand.svg";

const ClickButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: black;
  margin-top: 20px;
  margin-left: 20px;
  border: none;
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default function Searchbutton() {
  return (
    <ClickButton>
      <ButtonIcon src={magicWand} />
    </ClickButton>
  );
}
