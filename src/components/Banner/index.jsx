import {
  StyledA,
  StyledDiv,
  StyledH1,
  StyledHelloBox,
  StyledImage,
  StyledImageBox,
  StyledLinkBox,
  StyledMain,
  StyledOverlay,
  StyledP,
  StyledProfilePicBox,
  StyledSpan,
  StyledTextDiv,
} from "./styles";
import rubitube from "../../assets/rubitube.png";
import robofriends from "../../assets/robofriends.png";
import bank from "../../assets/bank.png";
import github from "../../assets/github.svg";
import profilepic from "../../assets/profilepic.png";

function Banner() {
  return (
    <StyledMain>
      <StyledDiv>
        <StyledHelloBox>
          <StyledProfilePicBox>
            <StyledImage src={profilepic} />
            <StyledOverlay />
          </StyledProfilePicBox>
          <StyledP>Hello, I'm Ru</StyledP>
        </StyledHelloBox>
        <StyledTextDiv>
          <StyledH1>
            <StyledSpan>
              Love
              <br />
            </StyledSpan>
            for creating and <br />
            <StyledSpan> Developing </StyledSpan>
            projects
          </StyledH1>
          <StyledP>
            Born in Brazil, based in Portugal. I belive web development can be
            diverse and inclusive. My mission is to present new possibilities
            that create a kinder world.
          </StyledP>
        </StyledTextDiv>
        <StyledLinkBox>
          <a href="#projects">Projects</a>
          <StyledA href="http://www.github.com/ruvolpe">
            <img src={github} />
          </StyledA>
        </StyledLinkBox>
      </StyledDiv>
      <StyledImageBox>
        <img src={rubitube} alt="" />
        <img src={robofriends} alt="" />
        <img src={bank} alt="" />
        <img src={rubitube} alt="" />
        <img src={robofriends} alt="" />
        <img src={bank} alt="" />
      </StyledImageBox>
    </StyledMain>
  );
}

export default Banner;
