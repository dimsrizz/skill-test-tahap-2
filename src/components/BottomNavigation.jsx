import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import homeIconSrc from "../assets/home1.png"; // Import home icon image
import menuIconSrc from "../assets/menu1.png"; // Import menu icon image

export default function BottomNav({ navValue }) {
  const [value, setValue] = React.useState(navValue);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }} className="pt-2">
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
          icon={
            <img
              src={homeIconSrc}
              alt="Home"
              style={{ width: 20, height: 20 }}
            />
          } // Use img tag with src attribute
          onClick={() => {
            navigate("/wallet");
          }}
        />
        <BottomNavigationAction
          label="Menu"
          icon={
            <img
              src={menuIconSrc}
              alt="Menu"
              style={{ width: 20, height: 20 }}
            />
          } // Use img tag with src attribute
          onClick={() => {
            navigate("/menu");
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
