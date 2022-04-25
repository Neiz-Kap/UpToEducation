import React, { useState, useContext } from "react";
import { Context } from "../../index.js";
import { observer } from "mobx-react-lite";
import "./Header.css";

import { Container, Form, Button, Navbar } from "react-bootstrap";
import Auth from "./Auth.js";
import AddCourse from "./AddCourse.js";

import { useLogOut } from "../../Utils";

import mainLogo from "../../Assets/header/logo.svg";
import search from "../../Assets/header/search.svg";
import profile from "../../Assets/header/profile.svg";
import { CATALOG_ROUTE } from "../../Utils/consts.js";

const Header = observer(() => {
  const [authModalShow, setAuthModalShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const { user } = useContext(Context);

  const onSearchSource = (e) => {
    e.preventDefault();
  };

  const onClickProfile = () => {
    if (!user.isAuth) {
      setAuthModalShow(true);
    }
  };

  return (
    <header className="header">
      <div className="header__container fixed_container py-2">
        <Navbar expand="lg" className="justify-content-between">
          <Navbar.Brand href={CATALOG_ROUTE} className="text-white">
            <img
              className="d-inline-block align-top"
              src={mainLogo}
              alt="Logo"
              width="30"
              height="30"
            />{" "}
            UpToEducation
          </Navbar.Brand>

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> */}

          <Form inline className="header-search__container ">
            <Form.Control
              className="header-search__input h-auto"
              type="text"
              placeholder="Поиск курсов на сайте"
            />
            <button className="header-search__button" onClick={onSearchSource}>
              <img className="header-search__icon" src={search} alt="search" />
            </button>
          </Form>

          <button
            className="header_auth__button"
            variant="primary"
            onClick={onClickProfile}
          >
            <img className="header_auth__icon" src={profile} alt="profile" />
            {user.isAuth && <p className="mx-1 mb-0">Личный кабинет</p>}
            {/* https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog/community?lb=UgkxOS23ELaeCA4bNHtgJbtdlpiSbFVb_Kd5 */}
          </button>

          {/* </Navbar.Collapse> */}

          <AddCourse show={lgShow} onHide={() => setLgShow(false)} />
          <Auth
            show={authModalShow}
            onHide={() => setAuthModalShow(false)}
            setAuthModalShow={setAuthModalShow}
          />
        </Navbar>
      </div>
    </header>
  );
});

export default Header;
