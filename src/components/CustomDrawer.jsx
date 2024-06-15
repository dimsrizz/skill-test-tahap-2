import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import { CloseSharp } from "@mui/icons-material";

export default function CustomDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        Open drawer
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        size="lg"
        sx={{
          ".MuiDrawer-root .MuiDrawer-content": {
            width: "100%",
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div>
            <CloseSharp />
          </div>
          {props.children}
        </Box>
      </Drawer>
    </Box>
  );
}
