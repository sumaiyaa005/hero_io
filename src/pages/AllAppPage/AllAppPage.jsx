import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import { CiSearch } from "react-icons/ci";

const AllAppPage = () => {
  const allAppPageData = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");

  // Search functionality with useMemo for better performance
  const filteredApps = useMemo(() => {
    if (!searchTerm.trim()) {
      return allAppPageData || [];
    }
    return (allAppPageData || []).filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [allAppPageData, searchTerm]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Our All Applications
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search Bar + Apps Found */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Dynamic Apps Found */}
          <div className="text-black-600 font-bold text-xl">
            <span className="">({filteredApps.length})</span> Apps Found
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search Apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-[#632EE3] focus:ring-2 focus:ring-[#632EE3]/20 text-gray-700"
            />
            <div className="absolute left-1  top-1/2 -translate-y-1/2  -translate-x-1/20 text-black-600">
              <CiSearch />
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApps.map((singleApp) => (
            <SingleApp key={singleApp.id} singleApp={singleApp} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredApps.length === 0 && searchTerm && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">
              No apps found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppPage;
