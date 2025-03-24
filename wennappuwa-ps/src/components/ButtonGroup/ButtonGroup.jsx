import React from "react";

const ButtonGroup = ({ buttonNames, selectedButton, onButtonClick }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          onClick={() => onButtonClick(buttonName)}
          className={`py-2 px-4 rounded-full text-lg font-semibold transition-all duration-300 
            ${
              selectedButton === buttonName
                ? "bg-[#e55c3e] text-white"
                : "bg-white text-black"
            } 
            hover:bg-[#e55c3e] hover:text-white`}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
