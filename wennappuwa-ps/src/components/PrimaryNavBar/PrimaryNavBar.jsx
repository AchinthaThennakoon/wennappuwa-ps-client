import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./PrimaryNavBar.module.css";

const navItems = [
  "Online Payment",
  "Have a Complaint",
  "Inquiry",
  "Emergency",
  "Feedback",
];

const PrimaryNavBar = () => {
  return (
    <AppBar position="sticky" class="bg-white">
      <Toolbar className="flex justify-between items-center px-4 py-2 ">
        <Box className="flex items-center gap-2 ml-28 ">
          <img src="./logo.png" alt="Logo" className="h-18" />
          <Typography class="text-lg font-bold tracking-wider uppercase">
            <Box className="w-full ">
              <span className="block ml-12">Wennappuwa</span>
              <span className="block ml-12">Pradeshiya Sabha</span>
            </Box>
          </Typography>
        </Box>

        <Box className="flex space-x-6 mr-18">
          {navItems.map((item) => (
            <Button key={item}>
              <Typography
                variant="subtitle2"
                class="text-base text-black font-extralight tracking-wider"
                className="text-black font-bold uppercase"
              >
                {item}
              </Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PrimaryNavBar;
