import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CreateBrand, CreateDevice, CreateType, Tabs } from "../../Components";
import { ADMIN_COURSES_FULL_ROUTE } from "../../Utils/consts";
import { Outlet } from "react-router-dom";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const adminPagesTabs = [
    {
      path: ADMIN_COURSES_FULL_ROUTE,
      title: "Unmoderated Courses",
    },
  ];
  return (
    <section className="content__section">
      <Tabs tabsList={adminPagesTabs} />
      <Outlet />
      {/* <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} /> */}
    </section>
  );
};

export default Admin;
