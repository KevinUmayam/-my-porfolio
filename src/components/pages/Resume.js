import '../../output.css'
// import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
const styles = {
  TextB: {
    borderRadius: "0px",
    backgroundColor: "transparent",
  },
  aS: {
    textDecoration: "none",
  },
};

export default function Resume() {
  return (
    <div className="Rbackground font">
      <div className="wholeContainer">
        <div className="textFormat">
          <div>
            <h1 className="rText text-xl  md:text-3xl  md:px-3 ">Coding Competency</h1>
          </div>
          <h1 className="rText lines text-xl  md:text-4xl"> || </h1>
          <div>
            <a
              style={styles.aS}
              className="aStyle"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1mlsF9I6ojmnCectHfj89Ig477aHB9UEwPAHqn7CRI0c/edit?usp=sharing"
            >
              <h1 className="rText text-xl  md:text-3xl md:px-3">My Resume</h1>
            </a>
          </div>
        </div>
        <div>
          <div className="listDivs ">
            <div>
              <h3 className="rText lists md:text-2xl md:px-6">Front End</h3>
              <ul>
                <li>
                  <h5 className="listT md:text-xl md:px-9">React</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">Handlebars</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9"> Javascript</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">jQuery</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">HTML5</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">CSS</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">Bootstrap</h5>
                </li>
              </ul>
            </div>
            <div className="margins">
              <h3 className="rText lists md:text-2xl md:px-6">Back End</h3>
              <ul>
                <li>
                  <h5 className="listT md:text-xl md:px-9">Javascript</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">Express</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9"> Sequelize</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">jQuery</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">MVC</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">Node</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">Jest</h5>
                </li>
              </ul>
            </div>
          </div>
          {/* here is the next div */}
          <div className="listDivs ">
            <div>
              <h3 className="rText lists md:text-2xl md:px-6">Databases </h3>
              <ul>
                <li>
                  <h5 className="listT md:text-xl md:px-9">MySQL </h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">MongoDb</h5>
                </li>
              </ul>
            </div>
            <div className="margins">
              <h3 className="rText lists md:text-2xl md:px-6">Version Control</h3>
              <ul>
                <li>
                  <h5 className="listT md:text-xl md:px-9">Git </h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9">Github</h5>
                </li>
                <li>
                  <h5 className="listT md:text-xl md:px-9"> Gitlab</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
