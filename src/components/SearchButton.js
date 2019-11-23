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
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;

  :hover {
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    from {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0.75);
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default function Searchbutton() {
  return (
    <ClickButton>
      <ButtonIcon src={magicWand} />
    </ClickButton>
  );
}
