import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Porfolio from "./pages/Porfolio";
import Resume from "./pages/Resume";
import NavTabs from "./NavTabs"
import "../index.css"

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");


  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Porfolio":
        return <Porfolio />;
      case "Resume":
        return <Resume />;
      default:
        break;
    }
  };

  const pageSetter = (page) => setCurrentPage(page);

  return (
    <div>
      {/* passing props to child NavTabs */}
      <NavTabs currentPage={currentPage} pageSetter={pageSetter} />

      {renderPage()}
    </div>
  );
}
