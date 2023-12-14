import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100vw;
  overflow: hidden;
  background: var(--dark-grey);
  color: var(--grey);
  @media (min-width: 768px) {
    padding: 10px clamp(3.125rem, 6rem, 7rem) 10px clamp(3.125rem, 6rem, 7rem);
  }
`;

export const StyledTextWrapper = styled.div`
  h4 {
    margin: 2px;
  }
  p {
    margin: 2px;
  }
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

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
