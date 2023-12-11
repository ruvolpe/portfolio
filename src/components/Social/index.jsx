import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

function Social() {
  return (
    <div id="social">
      <h1>
        Let's set up a conversation and <span>develop our creativity</span>{" "}
        together?
      </h1>
      <div>
        <div>
          <img src={linkedin} alt="linkedin logo" />
        </div>
        <div>
          <h3>My linkedin</h3>
          <p>We can chat and interact as well as sharing a network</p>
        </div>
        <div>
          <img src={github} alt="github logo" />
        </div>
        <div>
          <h3>GitHub</h3>
          <p>Please make sure to check out my most recent repositories</p>
        </div>
      </div>
    </div>
  );
}

export default Social;
