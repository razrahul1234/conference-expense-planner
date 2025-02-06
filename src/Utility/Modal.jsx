import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const MyModal = ({isOpen, onRequestClose, children}) => {
   return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="My Modal"
      style= {{
        overlay : {
            backgroundColor : 'rgba(0, 0, 0, 0.5)'
        },
        content : {
            top : '50%',
            left : '50%',
            bottom : 'auto',
            right: 'auto',
            marginRight: "-50%",
            transform : 'translate(-50%, -50%)',
            maxHeight:'85%'
        }
      }}
    >
        <button style={{float:'right'}} onClick={onRequestClose}>x</button>
        {children}
    </Modal>
   )
} 

export default MyModal;