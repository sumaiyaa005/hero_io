import React from "react";

const SingleApp = ({ singleApp }) => {
  const {
    image,
    title,
    description,   // আমরা এখানে title এর নিচে ব্যবহার করব
    ratingAvg,
    downloads,
  } = singleApp || {};

  // Downloads ফরম্যাট (9M, 24.5M ইত্যাদি)
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
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group">
      
      {/* Image Area */}
      <div className="h-48 bg-gray-100 flex items-center justify-center p-8 border-b">
        <img
          src={image}
          alt={title}
          className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-300"
        />
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