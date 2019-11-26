import React from "react";
import Main from "./components/Main";
import { ThemeProvider } from "emotion-theming";
import themes from "./utils/themes";
import styled from "@emotion/styled";

// const theme = {
//   backgroundcolor: "#740001",
//   secondcolor: "black",
//   highlightcolor: "#eeba30"
// };

const ThemeButton = styled.button`
  width: 45px;
  height: 20px;
  background: ${props => props.theme.highlightcolor};
  border-radius: 5px;
  font-size: 8px;
  border: none;
  box-shadow: 3px 3px 3px #7777;
  margin: 5px;
  outline: none;
`;

function App() {
  const [theme, setTheme] = React.useState(themes.default);

  function handleClick() {
    if (theme === themes.default) {
      setTheme(themes.special);
    } else {
      setTheme(themes.default);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeButton onClick={handleClick}>Lumos!</ThemeButton>
      <Main />
    </ThemeProvider>
  );
}

export default App;
