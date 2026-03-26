import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadeImage from "../../assets/icon-downloads.png";
import ratingImage from "../../assets/icon-ratings.png";
import reviewImage from "../../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const allApps = useLoaderData();

  const app = allApps.find((item) => item.id === parseInt(id));

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center text-2xl text-red-500">
        App not found!
      </div>
    );
  }

  const {
    title,
    image, // Big app icon (gradient background)
    companyName,
    description,
    size = "200",
    ratingAvg = 4.5,
    downloads = 2000000000,
    reviews = 800000,
    ratings = [],
    id: appId,
  } = app;

  const sortedRatings = [...ratings].sort((a, b) => b.count - a.count);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    setIsInstalled(installedApps.some((a) => a.id === appId));
  }, [appId]);

  const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(0) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.some((a) => a.id === appId);

    if (alreadyInstalled) {
      toast.info(`${title} is already installed.`, {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    // Show installing toast
    toast.loading("Installing...", {
      toastId: "installing",
      position: "top-center",
    });

    setTimeout(() => {
      const updatedApps = [...installedApps, app];
      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
      setIsInstalled(true);

      toast.dismiss("installing"); // remove loading toast
      toast.success(`${title} has been installed successfully!`, {
        position: "top-center",
        autoClose: 2500,
      });
    }, 1500);
  };
  return (
    <div className=" bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex gap-2 p-5">
          <div className="flex md:w-1/2 justify-center items-center">
            <img src={image} alt={title} className="w-80 h-80 p-5" />
          </div>
          <div className="flex flex-col space-y-6 w-full">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className=" text-xl">
              Developed by{" "}
              <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {" "}
                {companyName}
              </span>
            </p>
            <div className="divider"></div>
            <div className="flex gap-10 md:flex-row flex-col mt-2 justify-start items-center">
              <div className="flex flex-col items-center">
                <img
                  className="w-10 h-10"
                  src={downloadeImage}
                  alt="Downloads"
                />
                <p>Downloads</p>
                <p className="text-4xl font-extrabold mt-2">
                  {formatNumber(downloads)}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-10 h-10" src={ratingImage} alt="Ratings" />
                <p>Ratings</p>
                <p className="text-4xl font-extrabold mt-2">{ratingAvg}</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-10 h-10" src={reviewImage} alt="Reviews" />
                <p>Reviews</p>
                <p className="text-4xl font-extrabold mt-2">
                  {" "}
                  {formatNumber(reviews)}
                </p>
              </div>
            </div>
            <ToastContainer />
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`mt-2 px-10 py-3.5 text-white font-semibold text-lg rounded  w-fit shadow-md ${
                isInstalled
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600 active:scale-95"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>{" "}
          </div>
        </div>
        <div className="divider"></div>

        {/* Ratings Section */}
        <div className="p-12 border-b">
          <h3 className="font-semibold text-2xl text-gray-900 mb-4">Ratings</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sortedRatings}
                width="100%"
                height={300}
                layout="vertical"
              >
                <XAxis type="number" stroke="" />
                <YAxis dataKey="name" stroke="" type="category" width={60} />
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
          <div className="text-gray-700 leading-relaxed text-[16px] whitespace-pre-line">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
