import React, { useState } from "react";
import { AppBar, Tabs, Tab, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const buttonNames = [
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/" },
  { name: "Service", path: "/" },
  { name: "Downloads", path: "/downloads" },
  { name: "Video Gallery", path: "/video-gallery" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "si", label: "සිංහල" },
  { code: "ta", label: "தமிழ்" },
];

function SecondaryNavBar() {
  const { t, i18n } = useTranslation();

  //function to change the language of the website
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <AppBar position="sticky" class="bg-amber-50" elevation={0}>
        <div className="flex justify-start items-center px-4 py-2 gap-12 ml-28 ">
          {buttonNames.map((button) => (
            <Button
              key={button.name}
              component={Link}
              to={button.path}
              color=" black"
              size="large"
            >
              {button.name}
            </Button>
          ))}
          <Box className="flex space-x-0 content-end">
            {languages.map(({ code, label }) => (
              <Button
                key={code}
                onClick={() => changeLanguage(code)}
                class={`${
                  i18n.language === code
                    ? "bg-[#e55c3e] text-white"
                    : "bg-white text-black"
                } py-2 px-4  text-sm  ${
                  code === "en"
                    ? "rounded-l-full"
                    : code === "ta"
                    ? "rounded-r-full"
                    : ""
                }`}
              >
                {label}
              </Button>
            ))}
          </Box>
        </div>
      </AppBar>
    </>
  );
}

export default SecondaryNavBar;
