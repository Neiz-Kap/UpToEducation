import React, { useState } from "react";
import { Form } from "react-bootstrap";

import search from "../../Assets/header/search.svg";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const onSearchSource = (e) => {
    e.preventDefault();
  };

  return (
    <Form className="header-search__container ">
      <Form.Control
        className="header-search__input h-auto"
        type="text"
        placeholder="Поиск курсов на сайте"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="header-search__button" onClick={onSearchSource}>
        <img className="header-search__icon" src={search} alt="search" />
      </button>
    </Form>
  );
};

export default Search;
