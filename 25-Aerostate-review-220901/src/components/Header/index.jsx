import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, PageHeader, Avatar, Image, message } from "antd";
import { FaPlane } from "react-icons/fa";

import { setUser } from "../../state/user";

import s from "./style.module.scss";

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    const user = {
      id: 14,
      name: "Tom Hanks",
      img: "https://i.imgur.com/FIp0sgs.jpg",
      favorites: [],
    };
    dispatch(setUser(user));
    message.success(`Success login: welcome back ${user.name}`);
  };

  return (
    <header>
      <PageHeader
        className={s.brand}
        avatar={{ icon: <FaPlane /> }}
        title="Aerostates"
        subTitle="Flights and state managment"
      />
      {user.id ? (
        <div className={s.user}>
          <p>Welcome {user.name}!</p>
          <Avatar src={<Image src={user.img} />} />
        </div>
      ) : (
        <Button type="primary" size="large" onClick={handleLoginClick}>
          Login
        </Button>
      )}
    </header>
  );
}
