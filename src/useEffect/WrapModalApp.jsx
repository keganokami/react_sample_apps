import React, { useState } from 'react';
import { ModalDialogs } from './ModalDialogs';

export function WrapModalApp() {

  const [show, setShow] = useState(false);
  return (
    <>
    <h1>Wrap Modal App</h1>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <ModalDialogs isOpen={show}>
        <h1>Modal Dialog</h1>
        <p>This is a modal dialog</p>
        <button onClick={() => setShow(false)}>Close</button>
      </ModalDialogs>
    </>
  );
}