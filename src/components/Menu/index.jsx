import styled from "styled-components";
import React from "react";

const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--purple);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  z-index: 1000;
  top: 0;
  left: 0;
  transition: transform 1s ease-in-out;
  width: 100%;
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: var(--grey);
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} setOpen={setOpen}>
      <a href="#techs" onClick={() => setOpen(!open)}>
        Tech Stack
      </a>
      <a href="#projects" onClick={() => setOpen(!open)}>
        Projects
      </a>
      <a href="#contact" onClick={() => setOpen(!open)}>
        Contact
      </a>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2000;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--white);
    border-radius: 25%;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Header;
