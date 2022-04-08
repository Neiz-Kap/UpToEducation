import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import { Modal, Container, Row, Form, Button } from 'react-bootstrap';
import "./Header.css";
import { Context } from "../../index.js";
import { registration, login } from "../../HTTP/userAPI";
import { CATALOG_ROUTE } from "../../Utils/consts.js"


const Auth = observer((props) => {
  const { user } = useContext(Context);
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      if (isLogin) {
        await login(email, password);
      }
      else {
        await registration(email, password)
      }

      user.setUser(user);
      user.setIsAuth(true);
      history.push(CATALOG_ROUTE);
      props.onHide(false);
    } catch (e) {
      alert(e.responce.data.message)
    }

  }
  return (
    <Modal {...props} className="auth__modal" aria-labelledby="contained-modal-title-vcenter">
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
                  onChange={e => setIsLogin(!isLogin)}
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto mt-4">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">

                          <h4 className="mb-4 pb-3">Log In</h4>
                          <Form>
                            <Form.Group className="form-group">
                              <input type="email"
                                name="email"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"

                                value={email}
                                onChange={e => setEmail(e.target.value)}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </Form.Group>

                            <Form.Group className="form-group mt-2">
                              <input type="password"
                                name="password"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"

                                value={password}
                                onChange={e => setPassword(e.target.value)}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </Form.Group>
                            <Button
                              className="btn mt-4"
                              onClick={click}>
                              Log
                            </Button>
                            {/*                                                         <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>*/}
                          </Form>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>

                          <Form.Group className="mt-2">
                            <input type="email"
                              name="email"
                              className="form-style" placeholder="Your Email" id="logemail"
                              autoComplete="off"

                              value={email}
                              onChange={e => setEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </Form.Group>
                          <Form.Group className="mt-2">
                            <input type="password" name="password"
                              className="form-style" placeholder="Your Password" id="logpass"
                              autoComplete="off"

                              value={password}
                              onChange={e => setPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </Form.Group>
                          <Button className="btn mt-4"
                            onClick={click}
                          >
                            Sign
                          </Button>
                        </div>
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
})

export default Auth;
