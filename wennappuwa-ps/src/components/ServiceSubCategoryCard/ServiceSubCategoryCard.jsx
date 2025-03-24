import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ServiceSubcategoryCard = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="w-72 h-48 p-4 mb-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 ease-in-out"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <Typography
          variant="h6"
          className="text-xl font-semibold text-center text-gray-800"
        >
          {title}
        </Typography>
      </div>
    </Link>
  );
};

export default ServiceSubcategoryCard;
