import React from "react";

const SingleApp = ({ singleApp }) => {
  const { image, title, ratingAvg, downloads } = singleApp || {};

  const formatDownloads = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num;
  };

  return (
    <div className="bg-white  shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group p-4">
      {/* Image Area */}
      <div className=" h-65  rounded flex items-center justify-center ">
        <img src={image} alt={title} className="h-full w-full " />
      </div>

      {/* Content Area */}
      <div className="p-4">
        <h3 className="font-semibold text-base leading-tight text-gray-800 line-clamp-2 min-h-[44px]">
          {title}
        </h3>

        {/* Stats Row */}
        <div className="flex items-center justify-between mt-4">
          {/* Downloads */}
          <div className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            <span>↓</span>
            {formatDownloads(downloads)}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-medium px-3 py-1 rounded-full">
            <span>★</span>
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApp;
