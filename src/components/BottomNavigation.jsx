import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function BottomNav({ navValue }) {
  const [value, setValue] = React.useState(navValue);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "auto" }} className="">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="shadow-lg"
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => {
            navigate("/wallet");
          }}
        />
        <BottomNavigationAction
          label="Menu"
          icon={<MenuIcon />}
          onClick={() => {
            navigate("/menu");
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
