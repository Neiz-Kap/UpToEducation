import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";

import { Context } from "../../index.js";

const PassInput = () => {
  const { user } = useContext(Context);

  const [password, setPassword] = useState("");
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [passClassName, setPassClassName] = useState("");

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(e.target.value);

    const pattern =
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    //       (?=.*[0-9]) - строка содержит хотя бы одно число;
    // (?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
    // (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
    // (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
    // [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.
    // Подробнее: http://ru.stackoverflow.com/questions/533675/ddg#533681

    if (password.match(pattern)) {
      setPassClassName("valid"); // for user
      user.setIsValidPassword(true);
      user.setPassword(password);
    } else if (password == "") {
      setPassClassName("");
      user.setIsValidPassword(false);
    } else {
      setPassClassName("invalid");
      user.setIsValidPassword(false);
    }
  };

  return (
    <Form.Group className="form-group mt-2">
      <Form.Control
        type={isOpenPassword ? `text` : `password`}
        name="password"
        className="form-style"
        placeholder="Ваш Пароль"
        value={password}
        onChange={(e) => onChangePassword(e)}
      />
      <i
        className="input-icon uil uil-lock-alt"
        onClick={() => {
          setIsOpenPassword(!isOpenPassword);
          console.log(isOpenPassword);
        }}
      ></i>
      <span className={`indicator ${passClassName}`}></span>
    </Form.Group>
  );
};

export default PassInput;
