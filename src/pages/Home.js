import React from "react";
import Header from "../components/Header/Header";
import Welcome from "./../components/Welcome/Welcome";
import CleanDesign from "../components/AboutCompany/CleanDesign";
///////
function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <CleanDesign/>
    </>
  );
}

export default Home;
