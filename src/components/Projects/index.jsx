import { Card } from "../../fragments/Card";
import { StyledMain } from "./styles";
import robofriends from "../../assets/robofriends.png";
import rubitube from "../../assets/rubitube.png";
import bank from "../../assets/bank.png";

function Projects() {
  const projects = [
    ["Rubitube", "https://ruvolpe.github.io/robofriends/", rubitube, "React"],
    [
      "Robofriends",
      "https://ruvolpe.github.io/robofriends/",
      robofriends,
      "React",
    ],
    ["Bank Balance", "https://ruvolpe.github.io/robofriends/", bank, "React"],
    [
      "Robofriends",
      "https://ruvolpe.github.io/robofriends/",
      robofriends,
      "React",
    ],
  ];
  return (
    <StyledMain id="projects">
      {projects.map(([title, url, img, techs]) => (
        <Card title={title} url={url} img={img} techs={techs} key={title} />
      ))}
    </StyledMain>
  );
}

export default Projects;
