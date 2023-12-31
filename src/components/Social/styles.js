import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: var(--dark-grey);
  color: var(--white);
  padding: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`;

export const StyledDiv = styled.div`
  max-width: 50vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const StyledTitle = styled.h1`
  font-size: 2em;
`;

export const StyledSpan = styled.span`
  color: var(--purple);
  font-size: 2.5rem;
`;

export const StyledSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledIconWrapper = styled.div`
  background: var(--purple);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25%;
`;

export const StyledTextWrapper = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  gap: 5px;

  h3 {
    margin: 0px;
  }

  p {
    margin: 0px;
  }
`;
