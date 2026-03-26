import React, { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router";
import downloadeImage from "../../assets/icon-downloads.png";
import ratingImage from "../../assets/icon-ratings.png";
import reviewImage from "../../assets/icon-review.png";

import { ToastContainer, toast } from "react-toastify";
import { addToStoredDB, formatDownloadsNumber } from "../../utility/addToDB";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const appData = useLoaderData();
  const singleApp = appData.find((app) => app.id === appId);

  const {
    title,
    image,
    companyName,
    description,
    size,
    ratingAvg,
    downloads,
    reviews,
    ratings,
  } = singleApp || {};

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setIsInstalled(stored.includes(appId));
  }, [appId]);

  const handleMarkAsinstall = (id) => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];

    if (stored.includes(id)) {
      toast.info("Already Installed", { position: "top-center" });
      return;
    }

    addToStoredDB(id);
    setIsInstalled(true);

    toast.success("Installed Successfully", { position: "top-center" });
  };

  if (!singleApp) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        App not found
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex gap-2 p-5">
            {/* Image */}
            <div className="flex md:w-1/2 justify-center items-center">
              <img src={image} alt={title} className="w-80 h-80 p-5" />
            </div>

            {/* Info */}
            <div className="flex flex-col space-y-6 w-full">
              <h1 className="text-3xl font-bold">{title}</h1>

              <p className="text-xl">
                Developed by{" "}
                <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  {companyName}
                </span>
              </p>

              <div className="divider"></div>

              {/* Stats */}
              <div className="flex gap-10 md:flex-row flex-col mt-2 justify-start items-center">
                <div className="flex flex-col items-center">
                  <img className="w-10 h-10" src={downloadeImage} alt="" />
                  <p>Downloads</p>
                  <p className="text-4xl font-extrabold mt-2">
                    {formatDownloadsNumber(downloads)}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img className="w-10 h-10" src={ratingImage} alt="" />
                  <p>Ratings</p>
                  <p className="text-4xl font-extrabold mt-2">{ratingAvg}</p>
                </div>

                <div className="flex flex-col items-center">
                  <img className="w-10 h-10" src={reviewImage} alt="" />
                  <p>Reviews</p>
                  <p className="text-4xl font-extrabold mt-2">
                    {formatDownloadsNumber(reviews)}
                  </p>
                </div>
              </div>

              {/* Toast */}
              <ToastContainer />

              {/* Button */}
              <button
                onClick={() => handleMarkAsinstall(appId)}
                disabled={isInstalled}
                className={`btn rounded w-fit bg-green-500 text-white mt-2 px-10 py-3.5 ${
                  isInstalled ? "bg-red-400  cursor-not-allowed" : ""
                }`}
              >
                {isInstalled ? "Installed " : `Install Now ${size} MB`}
              </button>
            </div>
          </div>

          <div className="divider"></div>

          {/* Ratings */}
          <div className="p-12 border-b">
            <h3 className="font-semibold text-2xl text-gray-900">Ratings</h3>

            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ratings} layout="vertical">
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={60} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#FF8811" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Description */}
          <div className="p-12">
            <h3 className="font-semibold text-2xl text-gray-900 mb-6">
              Description
            </h3>
            <div className="">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
