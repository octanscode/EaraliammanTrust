import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { BACKEND_URL, PRIMARY_BLACK } from "@/constants";
import { resetLoginData } from "@/store/loginData";
import { StyledIconButton } from "./styled/styledIconBox";
import MenuIcon from "@mui/icons-material/Menu";

export default function Sidebar({ color }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  async function handleLogout() {
    try {
      const response = await fetch(`${BACKEND_URL}/logout`, {
        method: "GET",
        credentials: "include",
      });
      console.log("Response is ", response);
      if (response.ok) {
        console.log("Setting the login data to false");
        dispatch(resetLoginData(false));
        window.location.href = "/";
      } else {
        console.error("Logging Out failed");
      }
    } catch (error) {
      console.error("Error during Logging Out :", error);
    }
  }

  const pagesXS = [
    "Home",
    "About Us",
    "Agricultural Development",
    "Pollution Free Environment",
    "Learning and Development",
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
        window.location.href = "/agriculture-development";
        break;
      case 3:
        window.location.href = "/pollution-free-environment";
        break;
      case 4:
        window.location.href = "/learning-and-development";
        break;
      case 5:
        window.location.href = "/donate";
        break;
      case 6:
        window.location.href = "/get-involved";
        break;
      case 7:
        window.location.href = "/news-and-events";
        break;
      case 8:
        window.location.href = "/contact-us";
        break;
      default:
        window.location.href = "/";
        break;
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem
          key={"closebutton"}
          disablePadding
          sx={{ pl: { xs: 0.75, lg: 0.35 } }}
        >
          <StyledIconButton>
            <CloseIcon
              sx={{
                color: "black",
                p: 0,
                cursor: "pointer",
                fontSize: "inherit",
              }}
            />
          </StyledIconButton>
        </ListItem>
        {pagesXS.map((text, index) => (
          <>
            <ListItem
              key={text}
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: PRIMARY_BLACK,
                  color: "white",
                },
              }}
            >
              <ListItemButton disableRipple onClick={() => handleLinks(index)}>
                <Typography variant="h6" sx={{ p: 1 }}>
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)} sx={{ color: color }} />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
