import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Logo from "../components/Logo";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function Header({ setisNavOpen }) {
  const [circleClick, setCircleClick] = useState(false);
  // -------routing---------
  const navigate = useNavigate();
  const travelTo = (dest) => {
    navigate("/" + dest);
    setCircleClick(false);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setisNavOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Logo>Our Logo</Logo>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              margin: 0.5,
              display: { xs: "none", sm: "block" },
            }}
          >
            PAFY partner for you !
          </Typography>
          create new post
          <AddIcon color="black" />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={() => setCircleClick(true)} sx={{ p: 0 }}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={circleClick}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(circleClick)}
              onClose={() => setCircleClick(false)}
            >
              <MenuItem onClick={() => travelTo("Profile")}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
