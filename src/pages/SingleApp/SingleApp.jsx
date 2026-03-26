import React from "react";
import { Link } from "react-router";

const SingleApp = ({ singleApp }) => {
  const { id, image, title, ratingAvg, downloads } = singleApp || {};

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <div className="">
      <Link to={`/appDetails/${id}`} className="">
        <div className="bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 px-5 pt-5 h-full flex flex-col justify-between ">
          {/* Image Area */}
          <div className="h-60 rounded overflow-hidden">
            <img src={image} alt={title} className="h-full w-full" />
          </div>

          {/* Content Area */}
          <div className="pt-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-base text-gray-800 line-clamp-2 ">
              {title}
            </h3>

            {/* Stats Row (Always Bottom) */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-1.5 bg-gray-100 text-green-700 text-xs font-medium px-3 py-2">
                <span>↓</span>
                {formatDownloads(downloads)}
              </div>

              <div className="flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-medium px-3 py-2 ">
                <span>★</span>
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleApp;
