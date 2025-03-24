import React from "react";
import { Button } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";

const DownloadButton = ({ fileName, name }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/path/to/pdf/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <Button
      variant="contained"
      startIcon={<GetAppIcon />}
      onClick={handleDownload}
      className="mt-2"
    >
      Download {name}
    </Button>
  );
};

export default DownloadButton;
