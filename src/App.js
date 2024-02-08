import React from "react";
import "./App.css";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Landing from "./components/Landing";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: #1e1e1e;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Landing />
      </Container>
    </>
  );
}

export default App;
