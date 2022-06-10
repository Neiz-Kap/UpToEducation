import React from "react";
import { Link } from "react-router-dom";
import { COURSE_CATALOG_FULL_ROUTE } from "../../Utils/consts";

const NotAccess = () => {
  return (
    <section className="content__section">
      <h1>Ошибка доступа</h1>
      <p>
        Извините, но у вас нет прав и доступа к этой странице :( Хотите перейти
        на <Link to={COURSE_CATALOG_FULL_ROUTE}>главную страницу?</Link>
      </p>
    </section>
  );
};

export default NotAccess;
