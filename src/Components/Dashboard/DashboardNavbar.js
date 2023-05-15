import {
  Avatar,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../Assets/img/logo.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import ClassIcon from "@mui/icons-material/Class";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleIcon from '@mui/icons-material/People';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import FeedbackIcon from '@mui/icons-material/Feedback';
import QuizIcon from '@mui/icons-material/Quiz';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Dropdown.css";
import "./Dropdown.js"
import { useState } from "react";

let Body = createTheme({
  palette: {
    primary: {
      main: "#131E47",
    },
    secondary: {
      main: "#03CFD6",
    },
  },
  typography: {
    fontFamily: "Gilroy-Regular",
    h1: {
      fontFamily: "Gilroy-Bold",
      fontSize: "52px",
    },
  },
});

const DashboardNavbar = () => {
  const [drop, setDrop] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const router = useLocation();

  const dropDown = ()=>{
    setDrop(!drop);
  }
  const dropDown2 = ()=>{
    setDrop2(!drop2);
  }

  return (
    <>
      {isMatch ? (
        <Box></Box>
      ) : (
        <ThemeProvider theme={Body}>
          <Box
            sx={{
              width: "20%",
              bgcolor: "#131E47",
              display: "flex",
              flexDirection: "column",
              pt: 5,
              height: "100vh",
              position: "fixed",
            }}
          >
            <Avatar
              src={logo}
              sx={{
                width: "125px",
                height: "85px",
                mb: 2,
                border: "none",
              }}
            />

            <Box sx={{ width: "100%", mt: 2, mb: 3 }}>

              <List>
                <Link to="dashboard">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                  </ListItemButton>
                </Link>
                <List >
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <AssignmentTurnedInIcon />
                    </ListItemIcon>
                    <ListItemText>
                    <div>
<button class="dropdown-btn" onClick={dropDown2}>
 Classroom
  <span class="arrow-down"></span>
</button>
 </div>


                   
                    </ListItemText>
                  </ListItemButton>
                </List>
                <div className={drop2? "dropdown-content" : "dropdown-content dropClose"}>
                  <a href="#">Module 1</a>
                  <a href="#">Module 3</a>
                  <a href="#">Module 2</a>
                  <a href="#">Module 4</a>
                  <a href="#">Module 5</a>
                  <a href="#">Module 6</a>
                </div>
                <List >
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <AssignmentTurnedInIcon />
                    </ListItemIcon>
                    <ListItemText>
                    <div>
<button class="dropdown-btn" onClick={dropDown}>
  Task
  <span class="arrow-down"></span>
</button>
 </div>


                   
                    </ListItemText>
                  </ListItemButton>
                </List>
                <div className={drop? "dropdown-content" : "dropdown-content dropClose"}>
                  
                  <a href="/Task">Week 1</a>
                  <a href="#">Week 2</a>
                  <a href="#">Week 3</a>
                  <a href="#">Week 4</a>
                  <a href="#">Week 5</a>
                  <a href="#">Week 6</a>
                </div>
                <Link to="/community">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText>Community</ListItemText>
                  </ListItemButton>
                </Link>
                <Link to="/Help">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <HelpCenterIcon />
                    </ListItemIcon>
                    <ListItemText>Help</ListItemText>
                  </ListItemButton>
                </Link>
                <Link to="/Feedback">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <FeedbackIcon />
                    </ListItemIcon>
                    <ListItemText>Feedback</ListItemText>
                  </ListItemButton>
                </Link>
                <Link to="/FAQ">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <QuizIcon />
                    </ListItemIcon>
                    <ListItemText>FAQ</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Box>
            <Box
            sx={{
                mt: 3
            }}
            >
            <Link to="/Courses">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <ArrowBackIcon  />
                    </ListItemIcon>
                    <ListItemText>Back to My Courses</ListItemText>
                  </ListItemButton>
                </Link>
                <Link to="/Home">
                  <ListItemButton
                    sx={{
                      color: "white",
                      mr: 2,
                      pl: 5,
                      " 	&.Mui-selected": {
                        bgcolor: "rgba(217, 217, 217, 0.1)",
                        borderLeft: "4px solid #fff",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#fff", fontSize: "20px" }}>
                      <LogoutIcon  />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </ListItemButton>
                </Link> 
            </Box>
          </Box>
        </ThemeProvider>
      )}
    </>
  );
};

export default DashboardNavbar;

export const getMatchPath = (pathname = "", link = "") => {
  let links = pathname.split("/");

  return link.length === 2 ? links[1] === link : links[2] === link;
};
