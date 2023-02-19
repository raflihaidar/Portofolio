import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import "../App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModals({ open, onClose, modalContent }) {
  return (
    <div>
      {modalContent.map((item, index) => (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={onClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style} key={index}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="text-2xl font-semibold"
              >
                {item.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {item.desc}
              </Typography>
              <button className="w-32 mt-5 bg-gray-600 hover:bg-slate-800 py-3 px-3 rounded-full text-sm  block transition-colors text-white xl:hidden">
                <a href={item.link}>View github</a>
              </button>
            </Box>
          </Fade>
        </Modal>
      ))}
    </div>
  );
}
