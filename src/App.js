import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import theme from "./theme/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import backgroundImage from "./images/background_3.png";

function App() {
  const [currentView, setCurrentView] = useState("main"); // 'main' for Home flow, 'about' for AboutMe

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "fill",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <Sidebar setCurrentView={setCurrentView} />
        <Box
          sx={{
            width: "70%",
            marginLeft: "30%",
            overflowY: "auto",
          }}
        >
          {currentView === "main" ? (
            <>
              <Home setCurrentView={setCurrentView} />
              <Background />
              <Projects />
            </>
          ) : (
            <AboutMe />
          )}
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
