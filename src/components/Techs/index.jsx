import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import jsIcon from "../../assets/js.svg";
import nodeIcon from "../../assets/node.svg";
import reactIcon from "../../assets/react.svg";
import pythonIcon from "../../assets/python.svg";
import {
  StyledBox,
  StyledBoxMobile,
  StyledMain,
  StyledTriangle,
} from "./styles";
import { Parallax } from "react-scroll-parallax";

function Techs() {
  return (
    <StyledMain id="techs">
      <StyledTriangle />
      <Parallax className="parallax" translateY={[-100, 50]}>
        <StyledBox>
          <img src={htmlIcon} alt="HTML Icon" />
          <img src={cssIcon} alt="CSS Icon" />
          <img src={jsIcon} alt="JavaScript Icon" />
          <img src={nodeIcon} alt="Node JS Icon" />
          <img src={reactIcon} alt="React Icon" />
          <img src={pythonIcon} alt="Python Icon" />
        </StyledBox>
      </Parallax>
      <StyledBoxMobile>
        <img src={htmlIcon} alt="HTML Icon" />
        <img src={cssIcon} alt="CSS Icon" />
        <img src={jsIcon} alt="JavaScript Icon" />
        <img src={nodeIcon} alt="Node JS Icon" />
        <img src={reactIcon} alt="React Icon" />
        <img src={pythonIcon} alt="Python Icon" />
      </StyledBoxMobile>
    </StyledMain>
  );
}

export default Techs;
