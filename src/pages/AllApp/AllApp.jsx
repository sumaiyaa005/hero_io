import React from "react";
import SingleApp from "../SingleApp/SingleApp";
import { Link } from "react-router";

const AllApp = ({ allAppData }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Trending Apps</h1>
          <p className="text-gray-600 mt-3 text-lg">
            Explore All Trending Apps on the Market developed by us{" "}
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allAppData?.slice(0, 8).map((singleApp) => (
            <SingleApp key={singleApp.id} singleApp={singleApp} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/allAppPage"
            className="btn px-20 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-3 rounded-xl font-medium hover:brightness-110 transition-all duration-200"
          >
            Show All Apps
          </Link>
        </div>
        {/* Show All Button */}
      </div>
    </div>
  );
};

export default AllApp;
