import { useContext } from "react";
import { cloneElement } from "react";
import { useState } from "react";
import { createContext } from "react";
import "../../AkramCSS.css";

const ModalContext = createContext();

// const StyledModal = styled.div`
//   position: fixed;
//   box-shadow: 0px 0px 2px var(--grey-1);
//   padding: 0;
//   margin: 0;
//   width: 32%;
//   border-radius: 8px;

//   top: ${(props) => props.position.y}px;
//   left: ${(props) => props.position.x}px;
// `;

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const [position, setPosition] = useState("");

  const openModal = setOpenName;
  // const closeModal = () => setOpenName("");
  const closeModal = (name) => {
    setTimeout(() => {
      if (openName === name) setOpenName("");
    }, 200); // Small delay to prevent accidental closing
  };

  return (
    <ModalContext.Provider
      value={{ openName, openModal, closeModal, position, setPosition }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens, positionSide='bottom' }) {
  const { openModal, closeModal, setPosition, position } =
    useContext(ModalContext);

  function handleHover(e) {
    e.stopPropagation();
    const rect = e.target.closest("li").getBoundingClientRect();
    if (positionSide === 'bottom') {
      setPosition({ x: rect.left, y: rect.bottom });
    } else if(positionSide === 'left') {
      setPosition({ x: rect.left - rect.width, y: rect.top });
    }   
    console.log(position);
    openModal(opens);
  }

  return cloneElement(children, {
    onMouseEnter: handleHover,
    // onMouseLeave: closeModal,
  });
}

function Window({ children, name ,className}) {
  const { openModal, closeModal, openName, position } =
    useContext(ModalContext);

  return (
    <div
      className={`nav-modal ${className}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x - 10}px`,
        visibility: `${name !== openName ? "hidden" : "visible"}`,
        opacity: `${name !== openName ? "0" : "1"}`,
        transition: "all 0.2s",
      }}
      onMouseEnter={() => openModal(name)} // Keep it open while hovered
      onMouseLeave={() => closeModal(name)}
    >
      {children}
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
