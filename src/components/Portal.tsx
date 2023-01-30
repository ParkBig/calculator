import { ReactNode } from "react";
import reactDom from "react-dom";

const Portal = ({ children }: { children: ReactNode}) => {
  const el = document.getElementById("modal");
  if (el) {
    return reactDom.createPortal(children, el);
  }
  return null
};

export default Portal;