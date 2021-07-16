import React from "react";
import Header from "../components/Header/Header";
import Welcome from "./../components/Welcome/Welcome";
import CleanDesign from "../components/AboutCompany/CleanDesign";
import About from "../components/AboutCompany/About";
import Services from "../components/OurServices/Services";
import SecuredCustomer from "../components/SecuredCustomer/SecuredCustomer";
///////
function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <CleanDesign/>
      <About/>
      <Services/>
      <SecuredCustomer/>
    </>
  );
}

export default Home;
