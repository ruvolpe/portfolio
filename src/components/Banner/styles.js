import styled, { keyframes } from "styled-components";

const rotateUp = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: var(--dark-grey);
  color: var(--grey);
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const StyledDiv = styled.div`
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: none;
  align-items: center;
  padding: 0.5rem;

  @media (min-width: 768px) {
    padding: clamp(3.125rem, 6rem, 7rem);
    align-items: flex-start;
  }
`;

export const StyledHelloBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25%;
  filter: grayscale(100%);
  transform: scaleX(-1);
`;

export const StyledProfilePicBox = styled.div`
  position: relative;
  display: inline-block;
`;
export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: var(--transparent-purple);
  mix-blend-mode: multiply;
  border-radius: 25%;
`;

export const StyledTextDiv = styled.div`
  max-width: 50%;
`;

export const StyledH1 = styled.h1`
  color: var(--white);
  font-size: 1.5em;

  @media (min-width: 768) {
    font-size: 2em;
  }
`;

export const StyledP = styled.p`
  font-weight: 100;
`;

export const StyledImageBox = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 30px;
    align-items: flex-end;
    perspective: 800px;
    width: 100vh;
    height: 90vh;
    animation: ${rotateUp} 15s ease-in-out infinite;
    z-index: 2;

    img {
      width: 60%;
      height: 60%;
      opacity: 70%;
      padding: 0px 25px;
      object-fit: cover;
      transform: rotateY(-30deg);
    }
  }
`;

export const StyledSpan = styled.span`
  color: var(--purple);
  @media screen and (min-width: 768px) {
    letter-spacing: clamp(1px, 1.5vw, 5px);
    font-size: 3rem;
  }
`;

export const StyledLinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledA = styled.a`
  border-radius: 25%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
