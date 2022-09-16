import React from "react";

// the backdrop will be a way we can click out of the modal

const Backdrop = ({show, exitModal}) => {
  return show ? (
    <div className="backdrop" onClick={() => exitModal()}></div>
  ) : null;
};

export default Backdrop;
