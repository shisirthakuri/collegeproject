import React from 'react';

const Card = ({name,imageUrl,message}) => {
  return (
    <div className=" flex justify-center">
      <div className="max-w-md p-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-start mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={imageUrl || "https://randomuser.me/api/portraits/women/6.jpg"}
            alt="Profile"
          />
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">@synthgenai</p>
          </div>
        </div>
        <p className="text-gray-700">
          Listing on <strong>EliteAI.tools</strong> gave us a <strong>40% boost in signups</strong>! The quality of traffic
          is incredible — these are users who are actually looking for AI solutions. Worth every penny!
        </p>
      </div>
    </div>
  );
};

export default Card;
