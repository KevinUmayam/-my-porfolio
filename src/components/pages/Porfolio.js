// import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import Slider from './Slider'

export default function Portfolio() {
  return (
    <div className="bg-black sm:h-screen ">
      <div> <h1 className='flex justify-center text-center  rText text-4xl font-bold pb-8 pt-6 '>Project Display</h1></div>
      <div className='bg-black ' > <Slider /></div>
      {/* <div className='bg-black text-black h-20 md:h-36 '>  hello everyone</div> */}
    </div>

  );
}
