import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

export default function GlobalStyles() {
  const themes = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Playfair Display", serif;
          background-color: ${themes.backgroundcolor};
          color: black;
        }
      `}
    />
  );
}
