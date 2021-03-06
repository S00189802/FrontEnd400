import React from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CategoryModal from "../categoryModal/CategoryModal";

function CategoriesProfile() {
  //sets a state to whether a submited booking has been posted
  const [open, setOpen] = React.useState(false);

  function MouseOver(event) {
    event.target.style.backgroundColor = "green";
  }
  function MouseOut(event) {
    event.target.style.backgroundColor = "";
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div
      className="z-depth-1 grey lighten-3"
      style={{
        backgroundColor: "",
        borderTop: "3px solid black",
        borderLeft: "3px solid black",
        borderRight: "3px solid black",
      }}
    >
      <div className="grey center" style={{}}>
        <div class="chip grey">
          <b style={{ color: "black" }}> CLICK FOR MORE INFO</b>
        </div>

        <div
          onMouseOver={MouseOver}
          onClick={handleOpen}
          onMouseOut={MouseOut}
          class="chip grey"
        >
          <img src="./graffiti.svg" alt="graffiti"></img>
          Graffiti
        </div>
        <div
          onMouseOver={MouseOver}
          onClick={handleOpen}
          onMouseOut={MouseOut}
          class="chip grey"
        >
          <img src="./road.svg" alt="road"></img>
          Road or Path
        </div>
        <div
          onMouseOver={MouseOver}
          onClick={handleOpen}
          onMouseOut={MouseOut}
          class="chip grey"
        >
          <img src="./street-light.svg" alt="street-light"></img>
          Street lighting
        </div>
        <div
          onMouseOver={MouseOver}
          onClick={handleOpen}
          onMouseOut={MouseOut}
          class="chip grey"
        >
          <img src="./trash.svg" alt="trash"></img>
          Litter and Dumping
        </div>
        <div
          onMouseOver={MouseOver}
          onClick={handleOpen}
          onMouseOut={MouseOut}
          class="chip grey"
        >
          <img src="./tree.svg" alt="tree"></img>
          Tree and Grass
        </div>
        <div>
          <Button
            style={{ display: "none" }}
            id="postEventClick"
            onClick={handleOpen}
          ></Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 600 }}>
              <h6 id="parent-modal-title">
                Please read more about the type of issues we would like you to
                report!
              </h6>
              <p id="parent-modal-description">
                <CategoryModal open={open} setOpen={setOpen}></CategoryModal>
              </p>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default CategoriesProfile;
