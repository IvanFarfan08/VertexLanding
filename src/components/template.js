import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  scroll-snap-align: center;
  justify-content: center;
  position: relative;
  color: white;
`;
const Container = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

const Landing = () => {
  return (
    <Section>
      <Navbar></Navbar>
      <Container></Container>
    </Section>
  );
};

export default Landing;
