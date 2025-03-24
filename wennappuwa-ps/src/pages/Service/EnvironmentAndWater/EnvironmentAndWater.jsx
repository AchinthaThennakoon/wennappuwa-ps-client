import React from "react";
import { Typography } from "@mui/material";
import ServiceSubcategoryCard from "../../../components/ServiceSubCategoryCard/ServiceSubCategoryCard";
import categories from "../../../data/serviceCategories";

const EnvironmentAndWater = () => {
  const residentsCategory = categories.find((cat) => cat.name === "Residents");
  const environmentAndWaterSubcategory = residentsCategory?.subcategories.find(
    (subcat) => subcat.name === "Environment & Water"
  );

  if (!environmentAndWaterSubcategory) {
    return <div>Subcategory not found!</div>;
  }

  return (
    <div className="p-6">
      {/* Banner Section */}
      <div className="relative mb-12 w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center filter brightness-[40%] sepia-[100%] saturate-[120%] hue-rotate-[-0deg] bg-[url('../../../images/environment_water.jpg')]">
        <Typography
          variant="h2"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-center"
        >
          Environment And Water
        </Typography>
      </div>

      {/* Subcategory Cards Section */}
      <div className="mx-auto px-6 lg:px-12 max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {environmentAndWaterSubcategory.links.map((link, index) => (
          <ServiceSubcategoryCard
            key={index}
            title={link.text}
            link={link.href}
          />
        ))}
      </div>
    </div>
  );
};

export default EnvironmentAndWater;
