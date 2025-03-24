import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryLinks = ({ subcategory, handleClose }) => {
  const navigate = useNavigate();

  const handleLinkClick = (href) => {
    handleClose();
    navigate(href);
  };

  return (
    <div className="mb-6">
      <h3 className="font-bold text-xl mb-2">
        <Link
          to={subcategory.href || "#"}
          className="text-blue-600 hover:text-blue-800"
          onClick={() => handleLinkClick(subcategory.href)}
        >
          {subcategory.name}
        </Link>
      </h3>

      <div className="space-y-2">
        {subcategory.links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-blue-600 hover:text-blue-800 block"
            onClick={() => handleLinkClick(link.href)}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;
