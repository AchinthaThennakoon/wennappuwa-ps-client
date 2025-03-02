import { AppBar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useState, useRef } from "react";
import DialogBox from "../DialogBox/DialogBox";

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");

  //function to change the language of the website
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Function to handle opening the dialog for specific buttons
  const openDialog = (title) => {
    setDialogTitle(title);
    setDialogOpen(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <>
      <AppBar position="sticky" class="bg-amber-50" elevation={0}>
        <div className="flex justify-start items-center px-4 py-2 gap-12 ml-28 ">
          {buttonNames.map((button) => (
            <Button
              key={button.name}
              onClick={() =>
                button.name === "About Us" || button.name === "Service"
                  ? openDialog(button.name) // Open dialog instead of routing
                  : null
              }
              component={Link}
              to={button.path}
              color=" black"
              size="large"
            >
              {button.name}
            </Button>
          ))}
          <Box className=" flex float-right space-x-0  ">
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
                disableRipple
              >
                {label}
              </Button>
            ))}
          </Box>
        </div>
        <DialogBox
          open={dialogOpen}
          handleClose={handleCloseDialog}
          title={dialogTitle}
        />
      </AppBar>
    </>
  );
}

export default SecondaryNavBar;
