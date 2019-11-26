import React from "react";
import Main from "./components/Main";
import { ThemeProvider } from "emotion-theming";
import themes from "./utils/themes";

// const theme = {
//   backgroundcolor: "#740001",
//   secondcolor: "black",
//   highlightcolor: "#eeba30"
// };

function App() {
  return (
    <ThemeProvider theme={themes.special}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
