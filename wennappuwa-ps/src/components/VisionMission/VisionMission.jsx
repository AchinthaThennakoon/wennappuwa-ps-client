import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { FaBullseye, FaFlag } from "react-icons/fa";

const VisionMission = () => {
  const { t } = useTranslation();

  return (
    <Box className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 bg-gray-100 mb-5">
      {/* Vision Card */}
      <Card className="w-full md:w-1/2 shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center text-center p-6">
          <span className="text-blue-600 text-4xl">
            <FaBullseye className="text-blue-600 text-4xl" />
          </span>
          <Typography variant="h6" className="font-semibold text-gray-900 mt-4">
            {t("vision")}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 mt-2"
            sx={{
              lineHeight: "2",
              fontSize: "1.25rem",
            }}
          >
            {t("vision_text")}
          </Typography>
        </CardContent>
      </Card>

      {/* Mission Card */}
      <Card className="w-full md:w-1/2 shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center text-center p-6">
          <span className="text-blue-600 text-4xl">
            <FaFlag className="text-green-600 text-4xl" />
          </span>
          <Typography variant="h6" className="font-semibold text-gray-900 mt-4">
            {t("mission")}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 mt-2 italic"
            sx={{
              lineHeight: "2",
              fontSize: "1.25rem",
            }}
          >
            {t("mission_text")}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VisionMission;
