import { StyledHeader, StyledNav } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <h3>Ru Volpe</h3>
      <StyledNav>
        <a href="#techs">Techs</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
