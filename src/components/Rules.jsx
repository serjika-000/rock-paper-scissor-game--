import React from "react";
import closeIcon from "../assets/icon-close.svg";
import rulesImage from "../assets/image-rules.svg";

function Rules({ isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <dialog
      open
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg max-w-lg max-h-2/3 overflow-auto shadow-md">
        <button className="absolute bottom-4 right-4" onClick={onClose}>
          <img src={closeIcon} alt="close-icon" className="w-6 h-6" />
        </button>
        <img src={rulesImage} alt="Rules" />
      </div>
    </dialog>
  );
}

export default Rules;
