import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import mapImage from "../../assets/image/map.png";
import timeWorkingImage from "../../assets/image/timeWorking.png";
import downArrowImage from "../../assets/image/down.png";
import searchImage from "../../assets/image/search.png";
import userImage from "../../assets/image/user.png";
import heartImage from "../../assets/image/heart.png";
import cartImage from "../../assets/image/shopping-cart.png";
import telImage from "../../assets/image/tel.png";
import {
  selectTimeWork,
  selectPhones,
  selectSocialMedia,
} from "../../selectors";

export default function Header() {
  const timeWork = useSelector(selectTimeWork);
  const phones = useSelector(selectPhones);
  const { siteName } = useSelector(selectSocialMedia);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__body">
          <h2>Черная пятница началась</h2>
          <p>19.11.21-25.11.21</p>
          <h1>До - 60% на весь товар</h1>
          <button>За покупками</button>
        </div>
      </div>
      <div className="header__center">
        <div className="header__body">
          <div className="header__pannel">
            <select
              className="form-select select-One"
              aria-label="Default select example"
              defaultValue="Днепр"
            >
              <option>Днепр</option>
              <option>Киев</option>
            </select>
            <img className="img-map-bg" src={mapImage} alt="" />

            <select
              className="form-select select-To"
              aria-label="Default select example"
              defaultValue="Время работы"
            >
              <option>Время работы</option>
              {timeWork?.map((time, id) => (
                <option key={id}>{time}</option>
              ))}
            </select>
            <img className="img-timers-bg" src={timeWorkingImage} alt="" />
          </div>
          <div className="header__navigation">
            <ul>
              <li>
                <Link to={""}>Корпоративным клиентам</Link>
              </li>
              <li>
                <Link to={""}>Диллерам(b2b)</Link>
              </li>
              <li>
                <Link to={""}>Про нас</Link>
              </li>
              <li>
                <Link to={""}>Способы доставки</Link>
              </li>
              <li>
                <Link to={""}>Гарантия</Link>
              </li>
              <li>
                <Link to={""}>Возврат и обмен</Link>
              </li>
              <li>
                <Link to={""}>Распродажа</Link>
              </li>
              <li>
                <Link to={""}>Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__body">
          <h1>
            <Link to={"/"}>{siteName}</Link>
          </h1>
          <div className="header_body-wrapper">
            <div className="select-wrapper">
              <select
                className="form-select select-One"
                aria-label="Default select example"
                defaultValue="+38 (044) 501 73 73"
              >
                {phones?.map((phone, id) => (
                  <option key={id}>{phone}</option>
                ))}
              </select>
              <img className="img-tel-bg" src={telImage} alt="" />
            </div>
            <div className="header__input">
              <div className="header__ctegore">
                <span>
                  Все категории <img src={downArrowImage} alt="" />
                </span>
                <hr />
                <input className="search-input" type="text" />
                <div className="header__searchBtn">
                  <img src={searchImage} alt="" />
                </div>
              </div>
            </div>
            <div className="header__profile">
              <Link
                style={{ display: "flex", alignItems: "center" }}
                to={"/profile/"}
              >
                <img src={userImage} alt="user" />
              </Link>
              <Link
                style={{ display: "flex", alignItems: "center" }}
                to={"/favorite/"}
              >
                <img src={heartImage} alt="heart" />
              </Link>
              <Link
                style={{ display: "flex", alignItems: "center" }}
                to={"/cart/"}
              >
                <img src={cartImage} alt="cart" />
                <div className="header__cartItem">
                  <h1>Корзина</h1>
                  <h2>(1) товар</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
