import profilepic from "../../assets/profilepic.png";
import { StyledImage, StyledDiv } from "./styles";

function Footer() {
  return (
    <StyledDiv>
      <div>
        <StyledImage src={profilepic} alt="profile picture" />
      </div>
      <div>
        <p>Thank you!</p>
      </div>
    </StyledDiv>
  );
}

export default Footer;
