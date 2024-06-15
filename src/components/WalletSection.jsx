import { Box } from "@mui/material";
import React, { useState } from "react";
import bgMotif from "../assets/motif.png";
import { QrCode2 } from "@mui/icons-material";
import { QrCodeDialog } from "./QrCodeDialog";

const WalletSection = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <QrCodeDialog open={open} handleOpen={handleOpen} />
      <Box
        sx={{
          backgroundImage: `url(${bgMotif})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <Box className="w-full h-full p-6">
          <Box className="bg-white bg-opacity-80 p-8 rounded-lg shadow">
            <div>
              <h1>{data.greeting},</h1>
              <h2>{data.name}</h2>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center">
                <div
                  className="w-20 h-20 shadow rounded-full bg-white flex items-center justify-center hover:cursor-pointer"
                  onClick={handleOpen}
                >
                  <QrCode2 sx={{ fontSize: "3rem" }} />
                  {/* Deprecated Google QRCode Generated (404 Not Found) */}
                  {/* <QRCode url={data.qrcode} /> */}
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-bold text-lg">Saldo</p>
                  <p className="text-gray-600 text-sm">Points</p>
                </div>
              </div>
              <div className="text-end">
                <p className="text-gray-800 font-bold text-lg">
                  Rp. {data.saldo && data.saldo.toLocaleString("id-ID")}
                </p>
                <p className="text-green-500 font-bold text-lg">{data.point}</p>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WalletSection;
