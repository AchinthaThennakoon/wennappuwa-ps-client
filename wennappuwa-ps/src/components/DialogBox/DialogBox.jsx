import React, { useEffect, useRef } from "react";
import { Popper, Paper, Typography, IconButton, Fade } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Service from "../../pages/Service/Service";
import AboutUs from "../../pages/About Us/AboutUs";

const DialogBox = ({ open, handleClose, title }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClose]);

  // Dynamically choose content based on title
  const getContentForTitle = (title) => {
    switch (title) {
      case "Service":
        return <Service />;
      case "About Us":
        return <AboutUs />;
      default:
        return <Typography variant="body2">Default content</Typography>; // Default content if title doesn't match
    }
  };

  return (
    <Popper
      open={open}
      transition
      style={{
        marginTop: "125px",
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1300,
      }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} in={open}>
          <Paper
            ref={dialogRef}
            className="p-4 shadow-lg min-w-[1200px] min-h-[560px] transition-all duration-700  ease-in-out overflow-y-auto"
            style={{ maxHeight: "80vh" }} // Limits the height and enables scrolling
          >
            <div className="flex justify-between items-center">
              <Typography variant="h6">{title}</Typography>
              <IconButton onClick={handleClose} size="small">
                <CloseIcon />
              </IconButton>
            </div>
            <div className="mt-4">{getContentForTitle(title)}</div>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default DialogBox;
