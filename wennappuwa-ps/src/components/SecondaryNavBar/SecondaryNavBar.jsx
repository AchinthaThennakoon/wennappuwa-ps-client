import React, { useState } from "react";
import { AppBar, Tabs, Tab, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const buttonNames = [
  "Home",
  "About Us",
  "Service",
  "Downloads",
  "RTI",
  "Video Gallery",
  "Citizen Charter",
];

function SecondaryNavBar() {
  return (
    <>
      <AppBar position="sticky" class="bg-amber-50" elevation={0}>
        <div className="flex justify-start items-center px-4 py-2 space-x-4">
          {buttonNames.map((button, index) => (
            <Button key={index} color=" black" size="large">
              {button}
            </Button>
          ))}
        </div>
      </AppBar>
    </>
  );
}

export default SecondaryNavBar;
