import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import {
  StyledDiv,
  StyledIconWrapper,
  StyledMain,
  StyledSocialWrapper,
  StyledSpan,
  StyledTextWrapper,
} from "./styles";

function Social() {
  return (
    <StyledMain id="contact">
      <StyledDiv>
        <h1>
          Let's set up a conversation and
          <br /> <StyledSpan>develop our creativity</StyledSpan>
          <br /> together?
        </h1>
      </StyledDiv>
      <StyledDiv>
        <StyledSocialWrapper>
          <StyledIconWrapper>
            <img src={linkedin} alt="linkedin logo" />
          </StyledIconWrapper>
          <StyledTextWrapper>
            <h3>My linkedin</h3>
            <p>We can chat and interact as well as sharing a network</p>
          </StyledTextWrapper>
        </StyledSocialWrapper>
        <StyledSocialWrapper>
          <StyledIconWrapper>
            <img src={github} alt="github logo" />
          </StyledIconWrapper>
          <StyledTextWrapper>
            <h3>GitHub</h3>
            <p>Please make sure to check out my most recent repositories</p>
          </StyledTextWrapper>
        </StyledSocialWrapper>
      </StyledDiv>
    </StyledMain>
  );
}

export default Social;
