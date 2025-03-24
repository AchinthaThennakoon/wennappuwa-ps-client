import React, { useState } from "react";
import categoriesData from "../../data/serviceCategories";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import CategoryLinks from "../../components/CategoryLinks/CategoryLinks";

const Service = (handleClose) => {
  const [selectedButton, setSelectedButton] = useState("Residents");
  const buttonNames = [
    "Residents",
    "Business",
    "Menu 01",
    "Menu 02",
    "Menu 03",
    "Menu 04",
  ];
  const selectedCategory = categoriesData.find(
    (category) => category.name === selectedButton
  );

  return (
    <div className="p-6">
      <ButtonGroup
        buttonNames={buttonNames}
        selectedButton={selectedButton}
        onButtonClick={setSelectedButton}
      />

      {/* Display selected category links */}
      {selectedCategory && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory.subcategories.map((subcategory, index) => (
            <CategoryLinks
              key={index}
              subcategory={subcategory}
              handleClose={handleClose}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Service;
