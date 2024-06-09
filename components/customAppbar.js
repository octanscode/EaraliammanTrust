"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { GetCurrActiveNavItem } from "@/selector/currActiveNavItem";
import AppLogo from "../public/asset/image/AppLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setCurrActiveNavItem } from "@/store/currActiveNavItem";
import { PRIMARY_BLUE } from "@/constants";
import ProjectsOnHover from "./projectsOnHover";
import Sidebar from "./sidebar";
import { useEffect } from "react";

export default function CustomAppbar({ bgColor }) {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigationList = [
    "Home",
    "About Us",
    "Projects",
    "Donate",
    "Get Involved",
    "News & Events",
    "Contact Us",
  ];

  function handleLinks(index) {
    switch (index) {
      case 0:
        window.location.href = "/";
        break;
      case 1:
        window.location.href = "/about-us";
        break;
      case 2:
        break;
      case 3:
        window.location.href = "/donate";
        break;
      case 4:
        window.location.href = "/get-involved";
        break;
      case 5:
        window.location.href = "/news-and-events";
        break;
      case 6:
        window.location.href = "/contact-us";
        break;
      default:
        window.location.href = "/";
        break;
    }
  }

  const currActiveNavItem = useSelector(
    (state) => state.CurrActiveNavItem.activeNavIndex
  );

  useEffect(() => {
    console.log(
      "Inside useeffect of curr active nav item and value is ",
      currActiveNavItem
    );
  }, [currActiveNavItem]);

  const handleNavClick = (index) => {
    handleLinks(index);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: isScrolled
            ? "#f5f5f5"
            : bgColor
            ? bgColor
            : "rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            display: { xs: "none", lg: "flex" },
          }}
        >
          <a href="/">
            <Box
              sx={{
                height: "3rem",
                width: "3rem",
              }}
            >
              <img
                src={AppLogo.src}
                alt="AppLogo"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </a>
          <Box>
            {navigationList.map((item, index) => (
              <Button
                disableRipple
                variant="standard"
                key={`${index}${currActiveNavItem}${item}`}
                sx={{
                  color: isScrolled ? "black" : bgColor ? "black" : "white",
                  textTransform: "capitalize",
                  textDecoration:
                    index === currActiveNavItem
                      ? `2px solid ${
                          isScrolled ? "black" : bgColor ? "black" : "white"
                        } underline`
                      : "none",
                  textUnderlineOffset: "6px",
                  "&:hover": {
                    textDecoration: `2px solid ${
                      isScrolled ? "black" : bgColor ? "black" : "white"
                    } underline`,
                    textUnderlineOffset: "6px",
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => handleNavClick(index)}
              >
                {item === "Projects" ? (
                  <ProjectsOnHover />
                ) : (
                  <>
                    <Typography
                      sx={{ display: "none" }}
                    >{`${index}${currActiveNavItem}`}</Typography>
                    <Typography variant="body1">{item}</Typography>
                  </>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            display: { xs: "flex", lg: "none" },
          }}
        >
          <a href="/">
            <Box
              sx={{
                height: "3rem",
                width: "3rem",
              }}
            >
              <img
                src={AppLogo.src}
                alt="AppLogo"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </a>
          <Box>
            <Sidebar
              color={isScrolled ? "black" : bgColor ? "black" : "white"}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
