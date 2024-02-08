import React from "react";
import {
  OrbitControls,
  Stage,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import NavbarComponent from "./Navbar";
import Cube from "./Cube";
import A220_4 from "./A220_4";

const Section = styled.div`
  scroll-snap-align: center;
  justify-content: center;
  position: relative;
  color: white;
  margin-top: 200px;
  height: 100vh;
`;
const Container = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
  height: 100%;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flext-start;
  gap: 20px;
  padding-top: 280px;
`;

const Rectangle = styled.div`
  background-image: url("./img/bg.png");
  background-size: cover;
  background-position: center;
  width: 45%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledNav = styled(NavbarComponent)`
  position: relative;
`;

const TextBody = styled.div`
  position: relative;
  margin-left: 25px;
  align-items: left;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: white;
  z-index: 1;
  opacity: 80%;
  margin: 0;
`;

const TitleSec = styled.h1`
  font-size: 50px;
  color: #94bd80;
  z-index: 1;
  margin: 0;
  margin-top: 5px;
`;

const Paragraph = styled.p`
  font-size: 24px;
  width: 75%;
  color: white;
  z-index: 1;
  opacity: 80%;
  margin-top: 20px;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 100px;
`;

const Button = styled.button`
  background-color: #94bd80;
  color: white;
  border: none;
  padding: 10px 25px;
  font-size: 19px;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;
  opacity: 80%;
`;

const Landing = () => {
  return (
    <Section>
      <StyledNav></StyledNav>
      <Container>
        <Left>
          <Rectangle />
          <TextBody>
            <Title>Experience the future.</Title>
            <TitleSec>Today.</TitleSec>
            <Paragraph>
              Transform your concepts into reality with unparalleled efficiency
              using Vertex3D.
            </Paragraph>
            <Button>Join the Waitlist</Button>
          </TextBody>
        </Left>
        <Right>
          <Canvas>
            <Stage environment="city" intensity={0.6}>
              <A220_4 />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Landing;
