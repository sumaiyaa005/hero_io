import React, { useState, useMemo, useEffect } from "react";
import SingleApp from "../SingleApp/SingleApp";
import { CiSearch } from "react-icons/ci";
import errorImg from "../../assets/App-Error.png";

const AllAppPage = () => {
  const [allAppPageData, setAllAppPageData] = useState([]);
  const [loading, setLoading] = useState(true); // Page Loading
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Fetch Data
  useEffect(() => {
    fetch("appData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllAppPageData(data);
        setLoading(false); // Data load
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Live Search (Case Insensitive)
  const filteredApps = useMemo(() => {
    if (!searchTerm.trim()) {
      return allAppPageData || [];
    }
    return (allAppPageData || []).filter((app) =>
      app.title?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [allAppPageData, searchTerm]);

  // Search Loading Handler
  const handleSearch = (e) => {
    setIsSearching(true);
    setSearchTerm(e.target.value);

    setTimeout(() => {
      setIsSearching(false);
    }, 250);
  };

  // ==================== MAIN LOADING STATE (Data Load হওয়ার সময়) ====================
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 font-medium">
            Loading applications...
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Please wait while we fetch the apps
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Our All Applications
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Explore All Apps on the Market developed by us.
          </p>
        </div>

        {/* Search Bar + Count */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="text-xl font-bold text-gray-800">
            ({filteredApps.length}) Apps Found
          </div>

          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search Apps ..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-11 pr-4 py-3 border border-gray-400 rounded focus:outline-none focus:border-[#632EE3] focus:ring-2 focus:ring-[#632EE3]/20"
            />
            <CiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={22}
            />
          </div>
        </div>

        {/* Search Loading Indicator */}
        {isSearching && (
          <div className="flex justify-center my-6">
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-5 h-5 border-2 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
              <span>Searching...</span>
            </div>
          </div>
        )}

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredApps.map((app) => (
            <SingleApp key={app.id} singleApp={app} />
          ))}
        </div>

        {/* No Results Found */}
        {filteredApps.length === 0 && searchTerm && !isSearching && (
          <div className="text-center py-20">
            <div className="flex justify-center mb-8">
              <img src={errorImg} alt="No result" className="w-64 h-64" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              The App you are requesting is not found on our system. please try
              another apps
            </p>

            <button
              onClick={() => setSearchTerm("")}
              className="px-10 py-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5326c4] hover:to-[#8a4fe8] text-white font-medium rounded-xl transition-all active:scale-95 shadow-md"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppPage;
