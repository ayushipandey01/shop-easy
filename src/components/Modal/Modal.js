import { Fragment } from "react";
import * as ReactDOM from "react-dom";
import { Backdrop } from "../Loader/Loader";

export const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
        {
            ReactDOM.createPortal(
                <Fragment>
                    <Backdrop onClose={onClose}/>
                    <div className="modal">
                        <button type= "close" onClick={onClose}>X</button>
                        <div className="content">{children}</div>
                    </div>
                </Fragment>
                ,
                document.getElementById("modal-root")
            )
        }
    </Fragment>
  )
}