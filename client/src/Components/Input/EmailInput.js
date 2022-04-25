import React, { useState, useContext } from "react";
import { Modal, Container, Row, Form, Button } from "react-bootstrap";

import { Context } from "../../index.js";

const EmailInput = () => {
  const { user } = useContext(Context);
  const [email, setEmail] = useState("");
  const [emailClassName, setEmailClassName] = useState("");

  const onChangeEmail = (e) => {
    const pattern =
      /[\w\d]+(-)?[\w\d]*((\w|\d|\.)(-?[\w\d])+)*@\w{2,12}\.(\w+\.)?\w{2,3}/;
    const email = e.target.value;
    setEmail(email);
    if (email.match(pattern)) {
      setEmailClassName("valid"); // for user
      user.setEmail(email);
    } else if (email == "") {
      setEmailClassName("");
    } else {
      setEmailClassName("invalid");
    }
  };

  return (
    <Form.Group className="form-group">
      <Form.Control
        type="email"
        name="email"
        className="form-style"
        placeholder="Your Email"
        value={email}
        onChange={(e) => onChangeEmail(e)}
      />
      <i className="input-icon uil uil-at"></i>
      <span className={`indicator ${emailClassName}`}></span>
    </Form.Group>
  );
};

export default EmailInput;
