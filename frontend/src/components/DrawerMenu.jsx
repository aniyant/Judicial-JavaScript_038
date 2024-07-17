import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const pages = ["Home", "Editor", "Login", "Signup"];

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="top" 
      >
        <List  sx={{background: "#282828", color: "#fff", fontSize:"20px"}}>
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => setOpen(false)}>
              <ListItemText>
                {page}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff", marginLeft: "auto" }}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerMenu;
