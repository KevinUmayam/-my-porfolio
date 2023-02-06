import { React, useState } from "react";
// import GitIcon from "./pages/assets/github.svg";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const styles = {
  text: {
    color: "aliceblue",
  },

  selected: {
    color: "#0d6efd",
  },

  background: {
    backgroundColor: "#000000",
    paddingTop: " 3px",
    paddingBottom: " 3px",
  },
};

function NavTabs({ currentPage, pageSetter }) {
  const [menu, setMenu] = useState(false)

  const switchMenu = () => {
    setMenu(!menu)
  }
  return (
    <div>
      <nav className="bg-black text-white flex justify-between items-center h-16  mx-auto px-6 border-b-4 border-double border-custom-color shadow-custom-color z-999" >
        <h1 className="w-full text-3xl font-bold p-4  md:text-4xl ">Kevin Umayam</h1>
        <ul className=" hidden md:flex uppercase text-white " >
          <li >
            <a
              style={
                currentPage === "AboutMe" ? styles.selected : styles.text
              }
              className=" p-4 text-white text-lg"
              href="#aboutMe"
              onClick={() => pageSetter("AboutMe")}
            >
              About
            </a>
          </li>

          <li>
            <a
              style={
                currentPage === "Portfolio" ? styles.selected : styles.text
              }
              className=" p-4 text-white text-lg"
              href="#portfolio"
              onClick={() => pageSetter("Portfolio")}
            >
              Porfolio
            </a>
          </li>

          <li>
            <a
              style={
                currentPage === "Resume" ? styles.selected : styles.text
              }
              className=" p-4 text-white text-lg"
              href="#resume"
              onClick={() => pageSetter("Resume")}
            >
              Resume
            </a>
          </li>
        </ul>
        <div onClick={switchMenu} className=" block md:hidden">
          {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className={menu ? "fixed z-10 left-0 top-0 w-[65%] h-full border-r border-r-gray-400 bg-black ease-in-out duration-500" : "fixed z-10 left-[-100%]"}>
          <h1 className="w-full text-3xl font-bold m-4 ">Kevin Umayam</h1>
          <ul className="text-white pt-14 uppercase p-4" >
            <li className=" pb-6 border-white border-b ">
              <a
                style={
                  currentPage === "AboutMe" ? styles.selected : styles.text
                }
                className=" p-4 text-white text-lg w-10"
                href="#aboutMe"
                onClick={() => pageSetter("AboutMe")}
              >
                About
              </a>
            </li>

            <li className="pt-4 pb-6 border-blue-50 border-b">
              <a
                style={
                  currentPage === "Portfolio" ? styles.selected : styles.text
                }
                className=" p-4 text-white text-lg"
                href="#portfolio"
                onClick={() => pageSetter("Portfolio")}
              >
                Porfolio
              </a>
            </li>

            <li className="pt-4 pb-6">
              <a
                style={
                  currentPage === "Resume" ? styles.selected : styles.text
                }
                className=" p-4 text-white text-lg"
                href="#resume"
                onClick={() => pageSetter("Resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
