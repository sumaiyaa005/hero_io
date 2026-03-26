import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet className="px-20"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
