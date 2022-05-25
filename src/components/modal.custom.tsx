import { Employee } from "../utils/constance";
import { Dialog } from "./dialog";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";

interface Props {
  employee?: Employee;
  visible?: boolean;
}

function ModalCustom() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div>Hello from modal</div>,
      document.getElementById("modal-root") as Element
    );
  } else {
    return null;
  }
}

export default ModalCustom;
