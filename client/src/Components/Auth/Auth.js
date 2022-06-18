import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Modal, Container, Row, Form, Button } from "react-bootstrap";
import EmailInput from "../Input/EmailInput.js";
import PassInput from "../Input/PassInput.js";

import "./Auth.css";
import { Context } from "../../index.js";
import { registration, login } from "../../HTTP/userAPI";
import { COURSE_CATALOG_FULL_ROUTE } from "../../Utils/consts.js";

const Auth = observer((props) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const click = async () => {
    try {
      if (!user.isValidEmail) {
        alert(`Введите корректный email!`);
        return;
      } else if (!user.isValidPassword) {
        alert(`Введите корректный password!`);
        return;
      } else {
        if (isLogin) {
          await login(user.email, user.password);
        } else {
          await registration(user.email, user.password);
        }
      }

      user.setUser(user);
      user.setIsAuth(true);
      props.onHide(false);
      navigate(-1);
    } catch (e) {
      console.log(`e: ${JSON.stringify(e, null, 2)}`);
      alert(e.message || e.responce.data.message);
    }
  };

  return (
    <Modal
      {...props}
      className="auth__modal"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div className="section">
        <Container>
          <Row className="full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-4">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                  onChange={(e) => setIsLogin(!isLogin)}
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto mt-4">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <Form>
                          <EmailInput />
                          <PassInput />
                          <Button className="btn mt-4" onClick={click}>
                            Log
                          </Button>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </Form>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <EmailInput />
                        <PassInput />
                        <Button className="btn mt-4" onClick={click}>
                          Sign
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </Modal>
  );
});

export default Auth;
