import React from "react";
import Banner from "../../component/Banner/Banner";
import { useLoaderData } from "react-router";
import AllApp from "../AllApp/AllApp";

const Home = () => {
  const allAppData = useLoaderData();
  //   console.log(allAppData);
  return (
    <div className="bg-[#f3f3f3]">
      <Banner></Banner>
      <AllApp allAppData={allAppData}></AllApp>
    </div>
  );
};

export default Home;
