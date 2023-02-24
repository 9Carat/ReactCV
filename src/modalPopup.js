import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalPopup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const myKey = "reidar";
  let keyInput = "";
  document.addEventListener("keydown", (key) => {
    keyInput += key.key
    if (myKey === keyInput) {
      handleShow();
    }
    else {
        setTimeout(() => {
            keyInput = ""
        }, 2000)
    }
  })

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hallå!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hej Reidar!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hej då!
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Hej!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

