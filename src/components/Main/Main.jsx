import React, { useState } from "react";

import appsImage from "../../assets/image/apps.png";

import phoneItemImage from "../../assets/image/phoneItem.png";
import slideBgImage from "../../assets/image/Main slideBg.png";

import CardProduct from "../CardProduct/CardProduct";
// import AdditionalCatalogs from "./AdditionalCatalogs";
import ProductСategory from "./ProductСategory";
import SwiperCatalog from "./SwiperCatalog";
import { selectCatalog } from "../../selectors";
import { useSelector } from "react-redux";

export default function Main() {
  const [showMore, setShowMore] = useState(false);
  const catalog = useSelector(selectCatalog);

  const uniqueCategories = catalog.reduce((unique, category) => {
    if (!unique.some((item) => item.category_name === category.category_name)) {
      unique.push(category);
    }
    return unique;
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="main">
      <div className="main__body">
        <div className="main__row-1">
          <div className="main__listener">
            <div className="main__item-bgtitle">
              <span>Каталог товаров</span>
              <img src={appsImage} alt="" />
            </div>
            {uniqueCategories.map((category, index) => (
              <ProductСategory
                link={`/category/${category?.category_name}`}
                title={category["category_name"]}
                image={""}
              />
            ))}
            {/* {showMore && <AdditionalCatalogs />} */}
            <div className="main__showAll" onClick={toggleShowMore}>
              <span>{showMore ? "Скрыть" : "Показать ещё"}</span>
            </div>
          </div>
          <SwiperCatalog />
        </div>
        <div className="main__row-2">
          <div className="main__box-1">
            <h1>Новинки</h1>
            <h2>
              Самые свежие и <b>сочные новинки</b>, которые не оставят ни одного
              сомнения в их покупке !
            </h2>
            <button>В каталог</button>
          </div>
          <div className="main__box-2">
            <div className="main__itemRow">
              <CardProduct
                phoneItemImage={phoneItemImage}
                category="Бесплатная доставка"
                bonus="100"
                title="Телефон"
                price="3000"
                monthlyPayment="2"
                link="telephone"
                credit="1"
              />
              <div className="main-item-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main__row-3">
          <div className="main__box-1">
            <div className="main__title">
              <h1>Бестселлеры</h1>
              <h2>
                Наши любимчики, за качество мы <br /> даем <b>10 из 10</b>,
                рекомендуем !
              </h2>
            </div>
            <div className="main__button">
              <button>В каталог</button>
            </div>
          </div>
          <div className="main__box-2">
            <div className="main__itemRow">
              <CardProduct
                phoneItemImage={phoneItemImage}
                category="Бесплатная доставка"
                bonus="100"
                title="Телефон"
                price="3000"
                monthlyPayment="2"
              />
              <div className="main-item-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>

              <div className="main-item-top-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main__row-4">
          <div className="main__box-2">
            <div className="main__itemRow">
              <CardProduct
                phoneItemImage={phoneItemImage}
                category="Бесплатная доставка"
                bonus="100"
                title="Телефон"
                price="3000"
                monthlyPayment="2"
              />

              <div className="main-item-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>
            </div>
            <div className="main__itemRow">
              <CardProduct
                phoneItemImage={phoneItemImage}
                category="Бесплатная доставка"
                bonus="100"
                title="Телефон"
                price="3000"
                monthlyPayment="2"
              />

              <div className="main-item-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>
            </div>
          </div>

          <div className="main__box-1">
            <h1>Раcпродажа</h1>
            <h2>
              Хватай пока горячее, а еще и <br /> <b>по маленькой цене</b> !!!
            </h2>
            <button>В каталог</button>
          </div>
        </div>
        <div className="main__row-5">
          <div className="main__wrap">
            <div className="main__text">
              <h1>ты- </h1>
              <h2>хочешь iphone?</h2>
              <div className="main__br">
                <span>
                  Получи кредит от <br /> 2 000 грн в месяц
                </span>
                <button>Детальнее</button>
              </div>
            </div>
            <div className="main__bg">
              <img src={slideBgImage} alt="" />
            </div>
          </div>
        </div>
        <div className="main__row-6">
          <div className="main__box-1">
            <div className="main__title">
              <h1>Топ дня</h1>
              <h2>
                Что больше всего <br /> <b>покупают сегодня</b> !
              </h2>
            </div>
            <div className="main__button">
              <button>В каталог</button>
            </div>
          </div>
          <div className="main__box-2">
            <div className="main__itemRow">
              <CardProduct
                phoneItemImage={phoneItemImage}
                category="Бесплатная доставка"
                bonus="100"
                title="Телефон"
                price="3000"
                monthlyPayment="2"
              />
              <div className="main-item-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>
              <div className="main-item-top-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>
            </div>
            <div className="main__itemRow">
              <CardProduct
                phoneItemImage={phoneItemImage}
                category="Бесплатная доставка"
                bonus="100"
                title="Телефон"
                price="3000"
                monthlyPayment="2"
                link="telephone"
                credit="1"
              />
              <div className="main-item-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>
              <div className="main-item-top-top">
                <CardProduct
                  phoneItemImage={phoneItemImage}
                  category="Бесплатная доставка"
                  bonus="100"
                  title="Телефон"
                  price="3000"
                  monthlyPayment="2"
                  link="telephone"
                  credit="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
