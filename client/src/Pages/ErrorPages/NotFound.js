import React from "react";
import { COURSE_CATALOG_FULL_ROUTE } from "../../Utils/consts";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="content__section">
      <h2>Ошибка 404</h2>
      <p>
        Возможно, эта страница была удалена или её никогда не существовало.
        Хотите перейти на{" "}
        <Link to={COURSE_CATALOG_FULL_ROUTE}>главную страницу?</Link>
      </p>
    </section>
  );
};

export default NotFound;
