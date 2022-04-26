import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SubMenu = ({ menuItem }) => {
  const [subnav, setSubnav] = useState(false);
  // console.log(JSON.stringify(menuItem, null, 2));
  const showSubMenu = () => setSubnav((subnav) => !subnav);

  return (
    <Nav.Item className="sidebar_list__item" as="li">
      <NavLink className="sidebar_list__link" to={menuItem.path}>
        <img className="sidebar_list__icon" src={menuItem.icon} alt="" />
        <p className="sidebar_list__title">{menuItem.title}</p>
        {/* <div onClick={showSubMenu}>
          {menuItem.subNav && subnav ? (
            <img
              className="sidebar_list__arrow"
              src={menuItem.iconOpened}
              alt=""
            />
          ) : menuItem.subNav ? (
            <img
              className="sidebar_list__arrow"
              src={menuItem.iconClosed}
              alt=""
            />
          ) : null}
        </div> */}
      </NavLink>
      {/* {subnav && menuItem.subNav && (
        <ul>
          <Nav.Item>
            {menuItem.subNav.map((item, index) => {
              return (
                <NavLink
                  className="sidebar_list__link sidebar_sublist__link"
                  to={item.path}
                  key={index}
                >
                  <img
                    className="sidebar_list__icon sidebar_sublist__icon"
                    src={item.icon}
                    alt=""
                  />
                  <p className="sidebar_list__title">{item.title}</p>
                </NavLink>
              );
            })}
          </Nav.Item>
        </ul>
      )} */}
    </Nav.Item>
  );
};

export default SubMenu;

// const [selectId, setSelectId] = useState();

// const accordionData = [
//   {
//     id: 1,
//     title: "ОСНОВНЫЕ ОПРЕДЕЛЕНИЯ",
//     content: `<p><b>Покупатель</b> - физическое лицо, имеющее намерение заказать или приобрести товары, либо заказывающее, приобретающее или использующее товары исключительно для личных, семейных, домашних и иных нужд, не связанных с осуществлением предпринимательской деятельности, разместившее Заказ на сайте www.alis96.ru.</p>
//               <p><b>Продавец</b> – ИП Атрушкевич Д.А., ОГРНИП 314505024600011. Адрес: г. Королев, Московская область, ул. Полевая, 43/12.</p>
//               <p><b>Сайт</b> - совокупность информационных ресурсов, размещённых в Интернете по адресу www.alis96.ru. Сайт администрируется ООО «Алис-96», ИНН 5018052753, ОГРН 1035003355551.</p>
//               <p><b>Интернет-магазин</b> - Сайт, на котором любой Покупатель может ознакомиться с представленными Товарами, их описанием и ценами на Товары, выбрать определённый Товар, способ оплаты и доставки Товаров и оформить заказ, добавив товар в корзину.</p>
//               <p><b>Товар</b> - объект купли-продажи (вещь), не изъятый и не ограниченный в гражданском обороте и представленный к продаже в Интернет-магазине, посредством размещения в соответствующем разделе Интернет-магазина.</p>
//               <p><b>Заказ</b> - оформленный запрос Покупателя на покупку и доставку по указанному в запросе адресу Товаров, выбранных в Интернет-магазине, отправленный посредством сети интернет.</p>
//               <p><b>Служба Доставки</b> - третье лицо, оказывающее по договору с Продавцом услуги по доставке Заказов Покупателям.</p>`
//   },
// ]

// const toggle = (id) => {
//   if (selectId == id) {
//     return setSelectId(null);
//   }
//   setSelectId(id);
// }

{
  /* <div className="spoilerbox_row">
        {accordionData.map(accordion =>
          <Accordion
            key={accordion.id}
            id={accordion.id}
            selectId={selectId}
            toggle={toggle}
            title={accordion.title}
            content={acc
              ordion.content} />
        )}
      </div> */
}

// const Accordion = ({ id, selectId, title, content, toggle }) => {
//   return (
//     <div className="spoilerbox">
//       <div className="spoilerbox_name"
//         onClick={() => toggle(id)}
//       >
//         <a href="#"
//           className={`${id === selectId && 'active'}`}
//         >{title}</a>
//       </div>
//       <div className="spoilerbox_content"
//         style={{ display: id === selectId ? 'block' : 'none', transition: '' }}
//       >
//         {rHTML(content, 'textcol-2')}
//       </div>
//     </div >
//   )
// }
