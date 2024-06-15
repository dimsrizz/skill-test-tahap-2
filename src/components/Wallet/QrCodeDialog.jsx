import React from "react";
import { Dialog } from "@material-tailwind/react";
import { CloseSharp } from "@mui/icons-material";

export function QrCodeDialog({ open, handleOpen }) {
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xxl">
        <div className="flex justify-end p-12">
          <CloseSharp
            onClick={handleOpen}
            sx={{
              fontSize: "2.6rem",
            }}
            className="hover:cursor-pointer"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-lg">Show The QR Code below to the cashiers</h1>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld"
            alt="QR Code"
            className="w-52 h-52"
          />
        </div>
      </Dialog>
    </>
  );
}
