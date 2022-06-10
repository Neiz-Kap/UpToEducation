import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Auth } from "./../../Components";

const AuthRedirectModal = () => {
  const [show, setShow] = useState(true);
  const [authModalShow, setAuthModalShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleAuth = () => {
    handleClose();
    setAuthModalShow(true);
  };
  return (
    <section className="constent__section">
      <Modal
        className={"redirect__modal"}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          Для доступа к этой странице вам необходимо авторизоваться!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Позже
          </Button>
          <Button variant="primary" onClick={handleAuth}>
            Авторизоваться
          </Button>
        </Modal.Footer>
      </Modal>
      <Auth
        show={authModalShow}
        onHide={() => {
          navigate(-1);
          setAuthModalShow(false);
        }}
        setAuthModalShow={setAuthModalShow}
      />
    </section>
  );
};

export default AuthRedirectModal;
