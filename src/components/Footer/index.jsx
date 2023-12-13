import profilepic from "../../assets/profilepic.png";
import {
  StyledImage,
  StyledProfilePicBox,
  StyledOverlay,
  StyledFooter,
  StyledTextWrapper,
} from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <StyledProfilePicBox>
        <StyledImage src={profilepic} />
        <StyledOverlay />
      </StyledProfilePicBox>
      <StyledTextWrapper>
        <h4>Thank you!</h4>
        <p>Get in contact and let's talk</p>
      </StyledTextWrapper>
    </StyledFooter>
  );
}

export default Footer;
