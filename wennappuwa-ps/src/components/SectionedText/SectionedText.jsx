import React, { useState } from "react";
import { Collapse, Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const SectionedText = ({ title, children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-4">
      <Button
        onClick={() => setExpanded(!expanded)}
        endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        className="w-full flex justify-between items-center"
      >
        <Typography variant="h6">{title}</Typography>
      </Button>
      <Collapse in={expanded}>
        <div className="mt-2">{children}</div>
      </Collapse>
    </div>
  );
};

export default SectionedText;
