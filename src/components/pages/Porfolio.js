// import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import Slider from './Slider'

export default function Portfolio() {
  return (
    <div className="bg-black h-[850px] sm:h-screen ">
      <div> <h1 className='flex justify-center text-center  rText text-4xl font-bold pb-8 pt-6 '>Project Display</h1></div>
      <div> <Slider /></div>
    </div>
  );
}
