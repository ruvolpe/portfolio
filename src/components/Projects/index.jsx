import { Card } from "../../fragments/Card";
import { StyledMain } from "./styles";
import robofriends from "../../assets/robofriends.png";
import rubitube from "../../assets/rubitube.png";
import bank from "../../assets/bank.png";

function Projects() {
  const projects = [
    [
      "Rubitube",
      "https://rubitube.vercel.app/",
      rubitube,
      "https://github.com/ruvolpe/rubitube",
    ],
    [
      "Robofriends",
      "https://ruvolpe.github.io/robofriends/",
      robofriends,
      "https://github.com/ruvolpe/robofriends",
    ],
    [
      "Bank Balance",
      "https://react-entrega-s1-template-nu-kenzie-ruvolpe.vercel.app/",
      bank,
      "https://github.com/ruvolpe/bank_replica",
    ],
  ];
  return (
    <StyledMain id="projects">
      {projects.map(([title, url, img, github]) => (
        <Card title={title} url={url} img={img} github={github} key={title} />
      ))}
    </StyledMain>
  );
}

export default Projects;
