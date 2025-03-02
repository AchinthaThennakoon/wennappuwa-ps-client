import React from "react";
import { Popper, Paper, Typography, IconButton, Fade } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const DialogBox = ({ open, handleClose, title }) => {
  return (
    <Popper
      open={open}
      transition
      style={{
        marginTop: "125px",
        position: "fixed", // Make it fixed at the top of the page
        top: 20, // Add space from the top
        left: "50%", // Center the Popper horizontally
        transform: "translateX(-50%)", // Adjust for exact center
        zIndex: 1300, // Ensure it stays above other UI components
      }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} in={open}>
          <Paper
            className={`p-4 shadow-lg min-w-[1200px] min-h-[560px] transition-all duration-700 ease-in-out`}
          >
            <div className="flex justify-between items-center">
              <Typography variant="h6">{title}</Typography>
              <IconButton onClick={handleClose} size="small">
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="body2">Sample Text</Typography>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default DialogBox;
