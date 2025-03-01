import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navItems = [
  { name: "Online Payment", path: "/online-payment" },
  { name: "Have a Complaint", path: "/have-a-complaint" },
  { name: "Inquiry", path: "/inquiry" },
  { name: "Emergency", path: "/emergency" },
  { name: "Feedback", path: "/feedback" },
];

const PrimaryNavBar = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="sticky" class="bg-white">
      <Toolbar className="flex justify-between items-center px-4 py-2 ">
        <Box className="flex items-center gap-2 ml-28 ">
          <img src="./logo.png" alt="Logo" className="h-18" />
          <div class="text-lg font-bold tracking-wider uppercase">
            <Box className="w-full ">
              <span className="block ml-12">{t("branch_name1")}</span>
              <span className="block ml-12">{t("branch_name2")}</span>
            </Box>
          </div>
        </Box>

        <Box className="flex space-x-6 mr-18">
          {navItems.map((item) => (
            <Button key={item.name} component={Link} to={item.path}>
              <Typography
                variant="subtitle2"
                class="text-base text-black font-extralight tracking-wider"
                className="text-black font-bold uppercase"
              >
                {item.name}
              </Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PrimaryNavBar;
