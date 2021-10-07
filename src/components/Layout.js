import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import GlobalStyles from "./styles/Global";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </ThemeProvider>
  );
};
