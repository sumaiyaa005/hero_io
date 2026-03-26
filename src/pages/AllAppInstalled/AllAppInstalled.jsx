import React, { useEffect, useState } from "react";
import { getStoredApp, removeFromStoredDB } from "../../utility/addToDB";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const AllAppInstalled = () => {
  const [installList, setInstallList] = useState([]);
  const [sort, setSort] = useState("");

  const installData = useLoaderData();

  // 🔥 convert downloads string → number
  const parseDownloads = (value) => {
    if (typeof value === "number") return value;

    if (value.includes("M")) return parseFloat(value) * 1000000;
    if (value.includes("K")) return parseFloat(value) * 1000;

    return parseFloat(value);
  };

  // ✅ load installed apps
  useEffect(() => {
    if (!installData || installData.length === 0) return;

    const storedIds = getStoredApp();

    const list = installData.filter((app) =>
      storedIds.map(String).includes(String(app.id))
    );

    setInstallList(list);
  }, [installData]);

  // ✅ uninstall
  const handleUninstall = (id) => {
    removeFromStoredDB(id);

    setInstallList((prev) =>
      prev.filter((app) => String(app.id) !== String(id))
    );

    toast.success("Uninstalled!", { position: "top-center" });
  };

  // ✅ sort by downloads
  const handleSort = (type) => {
    setSort(type);

    let sorted = [...installList];

    if (type === "high-low") {
      sorted.sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    }

    if (type === "low-high") {
      sorted.sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    }

    setInstallList(sorted);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <ToastContainer />

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Your Installed Apps
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-4">
        <p className="text-gray-600 font-medium text-xl">
          {installList.length} Apps Found
        </p>

        {/* 🔥 Dropdown */}
        <select
          value={sort}
          onChange={(e) => handleSort(e.target.value)}
          className="border px-4 py-2 rounded bg-white shadow-sm"
        >
          <option value="">Sort By Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      {/* App List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {installList.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No Installed Apps
          </p>
        ) : (
          installList.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt=""
                  className="w-14 h-14 rounded bg-gray-200 object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {app.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="text-green-500 font-medium">
                      ↓ {app.downloads}
                    </span>
                    <span className="text-yellow-500">
                      ⭐ {app.ratingAvg}
                    </span>
                    <span>{app.size || "258 MB"}</span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllAppInstalled;