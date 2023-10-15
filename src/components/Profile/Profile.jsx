import React from "react";
import css from "./profile.module.css";
const firstname = "name";
const lastname = "lastname";
const phone = "+38(000)00-000-00";
const address = "address";

const Profile = () => {
  return (
    <section className={css.container}>
      <h2 className={css.header}>имя</h2>
      <p className={css.text}>
        {firstname} {lastname}
      </p>

      <h2 className={css.header}>номер</h2>
      <p className={css.text}>{phone}</p>

      <h2 className={css.header}>адрес</h2>
      <p className={css.text}>{address}</p>
    </section>
  );
};

export default Profile;
