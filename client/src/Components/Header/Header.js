import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import "./Header.css";

import { Container, Form, Button, Navbar, InputGroup } from "react-bootstrap";
import Auth from './Auth.js';
import AddCourse from './AddCourse.js';

import { Context } from "../../index.js";

import mainLogo from "../../Image/header/logo.svg";
import search from "../../Image/header/search.svg";
import addCourse from "../../Image/header/add.svg";

const Header = observer(() => {
  const [authModalShow, setAuthModalShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const { user } = useContext(Context);
  return (
    <header className="header">
      <Container className="fixed-top p-2">
        <Navbar expand="lg" className="justify-content-between">
          <Navbar.Brand href="/catalog" className="text-white">
            <img alt="Logo" src={mainLogo} width="30" height="30" className="d-inline-block align-top" /> UpToEducation
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <InputGroup>
                <Form.Control type="text" placeholder="Поиск курсов на сайте" className="h-auto" />
                <InputGroup.Append>
                  <Button>
                    <img src={search} alt="search" />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            {user.isAuth === false ? (
              <Button variant="primary" onClick={() => setAuthModalShow(true)}>
                Auth
              </Button>
            ) : (
              <button className="header-add-course" onClick={() => setLgShow(true)}>
                <img src={addCourse} alt="addCourse" />
              </button>
            )}
          </Navbar.Collapse>

          <AddCourse show={lgShow} onHide={() => setLgShow(false)} />
          <Auth
            show={authModalShow}
            onHide={() => setAuthModalShow(false)}
            setAuthModalShow={setAuthModalShow}
          />
        </Navbar>
      </Container>
    </header>
  );
});

export default Header;
