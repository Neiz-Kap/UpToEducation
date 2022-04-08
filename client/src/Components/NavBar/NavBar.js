import React from "react";
import { NavLink } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';

import { CATALOG_ROUTE, CHOISE_ROUTE, ACCOUNT_ROUTE, FAQ_ROUTE } from '../../Utils/consts.js'

const NavBar = (props) => {
    return (
        <section className="nav-section nav-section--visibility">
        <Container>
           <Nav className="justify-content-around" as="ul">
              <Nav.Item as="li">
                <NavLink to={CATALOG_ROUTE}>Каталог</NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={CHOISE_ROUTE}>Избранные</NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={ACCOUNT_ROUTE}>Личный кабинет</NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={FAQ_ROUTE}>FAQ</NavLink>
              </Nav.Item>
            </Nav>
        </Container>
        </section>

        // <Nav.Item as="li">
        //   <Nav.Link href="/chat">Чат</Nav.Link>
        // </Nav.Item>
        // <div class="nav-container">
        //     {// <!-- nav.navigation>button.nav-polygon>img[src=""]^ul.nav-list>li.nav-list__item*8 -->}
        //     <nav class="navigation">
        //         <button class="nav-polygon" id="profile-polygon">
        //             <img src="image/polygon.svg" alt="polygon"/>
        //         </button>
        //         <ul class="nav-list">
        //             <li class="nav-list__item">
        //                 <a href="#" class="nav-list__item-link">Программирование</a>
        //                 {// <!-- ul.nav-sub-list>li.nav-sub-list__item -->}
        //                 // <ul class="nav-sub-list">
        //                 //     <li class="nav-sub-list__item">Frontend-разработка</li>
        //                 //     <li class="nav-sub-list__item">Backend-разработка</li>
        //                 //     <li class="nav-sub-list__item">Python</li>
        //                 //     <li class="nav-sub-list__item"></li>
        //                 // </ul>
        //             </li>
        //             <li class="nav-list__item"><a href="#" class="nav-list__item-link">Психология</a></li>
        //             <li class="nav-list__item"><a href="#" class="nav-list__item-link">Английский</a></li>
        //             <li class="nav-list__item"><a href="#" class="nav-list__item-link">Маркетинг</a></li>
        //             <li class="nav-list__item"><a href="#" class="nav-list__item-link">Копирайтинг</a></li>
        //             <li class="nav-list__item"><a href="#" class="nav-list__item-link">Бизнес</a></li>
        //             <li class="nav-list__item"><a href="#" class="nav-list__item-link">Инвестиции</a></li>
        //             <li class="nav-list__item"><a href="#" class="nav-list__item-link">Дизайн</a></li>
        //         </ul>
        //     </nav>
        // </div>
    );
}

export default NavBar;
