import { useEffect, useRef } from "react";

export function ModalDialogs({ isOpen, children }) {
  const modalRef = useRef();

  useEffect(() => {
    if(!isOpen) {
      return;
    }

    const dialog = modalRef.current
    dialog.showModal()
    return () => {
      dialog.close()
    }
  }, [isOpen]);


  return <dialog ref={modalRef}>{children}</dialog>
}