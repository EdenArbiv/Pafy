import React, { useState } from "react";
//hooks:
import { useNavigate } from "react-router-dom";
//pages:
import Header from "./pages/Header";
import Main from "./pages/Main";
//MUI styels:
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";

export default function App() {
  // -------routing---------
  const navigate = useNavigate();

  const [isNavOpen, setisNavOpen] = useState(false);
  const travelTo = (dest) => {
    navigate("/" + dest);
    setisNavOpen(false);
  };

  return (
    <div>
      <Header setisNavOpen={setisNavOpen} />
      <Drawer
        anchor="left"
        open={isNavOpen}
        onClose={() => setisNavOpen(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("")}>
              <ListItemIcon>
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("info")}>
              <ListItemIcon>
                <InfoIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="rules" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("add")}>
              <ListItemIcon>
                <AddIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main />
    </div>
  );
}
