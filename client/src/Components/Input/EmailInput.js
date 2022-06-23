import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";

import { Context } from "../../index.js";

const EmailInput = () => {
  const { user } = useContext(Context);
  const [email, setEmail] = useState("");
  const [emailClassName, setEmailClassName] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

    const pattern =
      /[\w\d]+(-)?[\w\d]*((\w|\d|\.)(-?[\w\d])+)*@\w{2,12}\.\w{2,3}$/;

    if (email.match(pattern)) {
      setEmailClassName("valid"); // for indicator
      user.setIsValidEmail(true);
      user.setEmail(email);
    } else if (email == "") {
      setEmailClassName(""); // for indicator
      user.setIsValidEmail(false);
    } else {
      setEmailClassName("invalid"); // for indicator
      user.setIsValidEmail(false);
    }
  };

  return (
    <Form.Group className="form-group">
      <Form.Control
        type="email"
        name="email"
        className="form-style"
        placeholder="Ваш Email"
        value={email}
        onChange={(e) => onChangeEmail(e)}
      />
      <i className="input-icon uil uil-at"></i>
      <span className={`indicator ${emailClassName}`}></span>
    </Form.Group>
  );
};

export default EmailInput;
