import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Shortinput from "../Components/Inputs/Shortinput/Input";
import Longinput from "../Components/Inputs/Longinput/Input";

const Feedback = () => {
  return (
    <>
      <Box sx={{ width: { lg: "100%", md: "100vw" } }}>
        <Box
          sx={{
            paddingX: { xs: "7px" },
            marginTop: { lg: "8px" },
          }}
        >
          <Typography variant="body" sx={{ color: "#000", fontSize: "16px" }}>
            We would like to hear from you, kindly share your experiences with
            us and help us improve our services
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            paddingX: { xs: "10px" },
          }}
        >
          <Typography
            variant="body"
            sx={{ color: "#000", fontSize: "17px", fontWeight: "500" }}
          >
            Subject Matter
          </Typography>
          <Shortinput />
        </Box>

        <Box
          sx={{
            mt: "20px",
            paddingX: { xs: "10px" },
          }}
        >
          <Typography
            variant="body"
            sx={{ color: "#000", fontSize: "17px", fontWeight: "500" }}
          >
            Subject Matter
          </Typography>
          <Longinput />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            paddingX: { xs: "10px" },
          }}
        >
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#131E47",
              fontSize: "16px",
              fontWeight: "700",
              mt: "20px",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Feedback;
