import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function MenuBookTabs({ data, tabIdx, handleChange }) {
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={tabIdx}
        onChange={handleChange}
        variant="scrollable"
        aria-label="scrollable auto tabs example"
      >
        {data.map((item, index) => (
          <Tab key={index} label={item} />
        ))}
      </Tabs>
    </Box>
  );
}
