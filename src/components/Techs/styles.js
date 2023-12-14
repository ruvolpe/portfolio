import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  background: var(--dark-grey);
  color: var(--grey);
  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 60vw;
  flex-wrap: wrap;
  gap: 100px;
  height: 100%;
`;

export const StyledTriangle = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    background: linear-gradient(var(--purple), var(--grey));
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    height: 100vh;
    width: 100vw;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    transform: rotate(180deg);
  }
`;
