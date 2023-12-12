import styled from "styled-components";
import background from "../../assets/techsBackground.svg";

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: var(--dark-grey);
  color: var(--grey);
  background-image: url(${background});
  background-size: cover;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 60vw;
  flex-wrap: wrap;
  gap: 100px;
`;
