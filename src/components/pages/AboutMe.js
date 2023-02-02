// import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import kevin from "./assets/kevin.jpg"

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
      <div className="mt-16 mb-20 center-text">
        <h6 className="text-white text-xl text-center md:ml-24 md:mr-24">
          Front-end web developer leveraging sociology background to research the most desired designs and user experience trends on the web. Recently earned a certificate in full stack development from UCSD, with newly developed skills in JavaScript, CSS, React.js, and responsive web design.
        </h6>
      </div>
    </div>
  );
};