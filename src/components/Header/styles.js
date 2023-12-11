import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px clamp(3.125rem, 6rem, 9rem);
  height: 10vh;
  background: var(--dark-grey);
  border-bottom: 1px solid var(--purple);
  color: var(--white);
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
