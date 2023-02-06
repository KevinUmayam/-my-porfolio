// import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import kevin from "./assets/kevin.jpg"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="flex flex-col w-128  bg-black  items-center">
      <div className=" invisible h-20 rText text-4xl font-bold pt-4 md:visible">
        <p >About Me</p>
      </div>
      <div className=" sm:mt-10">
        <img className=" m-auto myP w-3/4 sm:w-5/6 
        
        border-custom-color border-8 border-double
        
        p-3

        rounded-full
        " src={kevin} alt="myself" />
      </div>
      {/* phonescreen */}
      <div className=" md:hidden">
        <p className="h-20  rText text-4xl font-bold pt-4">About Me</p>

      </div>
      {/* phonescreen */}
      <div className="mt-10 mb-10 center-text">
        <h6 className="text-white text-xl text-center md:ml-32 ml- md:mr-32 ml-14 mr-14">
          As a front-end web developer, I draw upon my background in sociology to stay abreast of the most desirable design and user experience trends on the web. I have successfully completed a full stack development certification from UCSD and have honed my skills in JavaScript, CSS, React.js, and responsive web design.
        </h6>
      </div>
      <div className="border-custom-color border-8 border-double rounded-full p-2 pl-6 pr-6 mb-14">
        <ul className=" flex mx-auto justify-center items-center">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kevin-umayam/"
            >
              <FaLinkedin className="icons" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/KevinUmayam"

            >
              <FaGithub className="icons ml-2.5 mr-1.5" />
            </a>
          </li>
          <li >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/19267013/kevin-umayam"
            >
              <FaStackOverflow className="icons" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};