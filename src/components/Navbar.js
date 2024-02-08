import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  margin-top: 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-left: auto;
  margin-right: 0px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  opacity: 85%;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: auto;
  margin-left: 40px;
  z-index: 1;
`;

const Line = styled.img`
  height: 5px;
  width: 50px;
  margin-right: 0px;
  margin-left: 95px;
  z-index: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo src="./img/logo.png" />
      <Line src="./img/line.png"></Line>
      <Links>
        <Link href="#">Home</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Support</Link>
      </Links>
    </Container>
  );
};

export default Navbar;
